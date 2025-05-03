from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
from django.db.models import Count
from datetime import datetime, timedelta

from .models import AdminLog
from .serializers import AdminLogSerializer, AdminArticleSerializer, AdminUserSerializer
from news.models import Article
from accounts.models import CustomUser

class AdminPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == 'admin'

class DashboardView(APIView):
    permission_classes = [AdminPermission]

    def get(self, request):
        # Get counts for dashboard
        total_users = CustomUser.objects.count()
        total_articles = Article.objects.count()
        pending_articles = Article.objects.filter(status='pending').count()
        
        # Get recent activity
        recent_logs = AdminLog.objects.all()[:5]
        
        # Get user registration trends (last 7 days)
        last_week = datetime.now() - timedelta(days=7)
        user_trends = CustomUser.objects.filter(
            date_joined__gte=last_week
        ).extra(
            select={'date': 'date(date_joined)'}
        ).values('date').annotate(count=Count('id'))

        return Response({
            'total_users': total_users,
            'total_articles': total_articles,
            'pending_articles': pending_articles,
            'recent_activity': AdminLogSerializer(recent_logs, many=True).data,
            'user_trends': user_trends
        })

class AdminArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = AdminArticleSerializer
    permission_classes = [AdminPermission]

    @action(detail=True, methods=['post'])
    def change_status(self, request, pk=None):
        article = self.get_object()
        status = request.data.get('status')
        if status in ['draft', 'pending', 'approved', 'rejected']:
            article.status = status
            article.save()
            
            # Log the action
            AdminLog.objects.create(
                action='change_article_status',
                user=request.user,
                content_type='article',
                object_id=article.id,
                description=f'Changed article status to {status}'
            )
            
            return Response({'status': status})
        return Response({'error': 'Invalid status'}, status=status.HTTP_400_BAD_REQUEST)

class AdminUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = AdminUserSerializer
    permission_classes = [AdminPermission]

    @action(detail=True, methods=['post'])
    def toggle_active(self, request, pk=None):
        user = self.get_object()
        user.is_active = not user.is_active
        user.save()
        
        # Log the action
        AdminLog.objects.create(
            action='toggle_user_active',
            user=request.user,
            content_type='user',
            object_id=user.id,
            description=f'{"Activated" if user.is_active else "Deactivated"} user account'
        )
        
        return Response({'is_active': user.is_active})

class AdminLogViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AdminLog.objects.all()
    serializer_class = AdminLogSerializer
    permission_classes = [AdminPermission]
