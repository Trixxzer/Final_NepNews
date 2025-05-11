from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
from django.db.models import Count
from datetime import datetime, timedelta
from rest_framework.reverse import reverse

from .models import AdminLog
from .serializers import AdminLogSerializer, AdminArticleSerializer, AdminUserSerializer, AuthorProfileSerializer, EditorProfileSerializer, RoleChangeRequestSerializer
from news.models import Article
from accounts.models import CustomUser, AuthorProfile, EditorProfile, RoleChangeRequest

class AdminPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == 'admin'

class DashboardView(APIView):
    permission_classes = [AdminPermission]

    def get(self, request):
        total_users = CustomUser.objects.count()
        active_authors = CustomUser.objects.filter(role='author', is_active=True).count()
        pending_role_requests = RoleChangeRequest.objects.filter(status='pending').count()

        # Dummy trend values (replace with real calculations if needed)
        total_users_trend = "+12% from last month"
        active_authors_trend = "+8% from last month"
        pending_role_requests_trend = "-5% from last month"

        # Recent Activities
        recent_logs = AdminLog.objects.order_by('-timestamp')[:5]
        activities = []
        for log in recent_logs:
            # Map action to activity title and status
            action_map = {
                'new_user_registration': ('New User Registration', 'Completed'),
                'role_change_request': ('Role Change Request', 'Pending'),
                'article_submission': ('Article Submission', 'Completed'),
                'account_deactivation': ('Account Deactivation', 'Completed'),
                'change_user_role': ('Role Change Request', 'Completed'),
                'approve_role_change': ('Role Change Request', 'Completed'),
                'reject_role_change': ('Role Change Request', 'Pending'),
            }
            activity_title, status = action_map.get(log.action, (log.action.replace('_', ' ').title(), 'Completed'))
            activities.append({
                "activity_title": activity_title,
                "user_name": log.user.username,
                "role": getattr(log.user, 'role', ''),
                "date": log.timestamp.strftime("%b %d, %Y"),
                "status": status
            })

        return Response({
            "stats": [
                {
                    "title": "Total Users",
                    "value": total_users,
                    "trend": total_users_trend,
                    "trendPositive": True
                },
                {
                    "title": "Active Authors",
                    "value": active_authors,
                    "trend": active_authors_trend,
                    "trendPositive": True
                },
                {
                    "title": "Pending Role Requests",
                    "value": pending_role_requests,
                    "trend": pending_role_requests_trend,
                    "trendPositive": False
                }
            ],
            "recent_activities": activities
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

    @action(detail=True, methods=['post'])
    def change_role(self, request, pk=None):
        user = self.get_object()
        role = request.data.get('role')
        valid_roles = ['reader', 'author', 'editor']
        if role not in valid_roles:
            return Response({'error': 'Invalid role'}, status=status.HTTP_400_BAD_REQUEST)
        old_role = user.role
        user.role = role
        user.save()
        AdminLog.objects.create(
            action='change_user_role',
            user=request.user,
            content_type='user',
            object_id=user.id,
            description=f'Changed user role from {old_role} to {role}'
        )
        return Response({'role': user.role})

class AdminLogViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AdminLog.objects.all()
    serializer_class = AdminLogSerializer
    permission_classes = [AdminPermission]

class ApprovalRequestAuthorsView(APIView):
    permission_classes = [AdminPermission]
    def get(self, request):
        author_pending = AuthorProfile.objects.filter(approval_status='pending')
        authors = AuthorProfileSerializer(author_pending, many=True).data
        return Response({'pending_authors': authors})

class ApprovalRequestEditorsView(APIView):
    permission_classes = [AdminPermission]
    def get(self, request):
        editor_pending = EditorProfile.objects.filter(approval_status='pending')
        editors = EditorProfileSerializer(editor_pending, many=True).data
        return Response({'pending_editors': editors})

class ApproveAuthorView(APIView):
    permission_classes = [AdminPermission]
    def post(self, request):
        user_id = request.data.get('user_id')
        action = request.data.get('action')  # 'approve' or 'reject'
        comment = request.data.get('comment', '')
        try:
            user = CustomUser.objects.get(id=user_id, role='author')
            profile = AuthorProfile.objects.get(user=user)
            if action == 'approve':
                profile.approval_status = 'approved'
                user.is_active = True
            elif action == 'reject':
                profile.approval_status = 'rejected'
                user.is_active = False
            else:
                return Response({'error': 'Invalid action'}, status=400)
            profile.approval_comment = comment
            profile.approved_by = request.user
            profile.save()
            user.save()
            return Response({'success': f'Author request {action}d.'})
        except CustomUser.DoesNotExist:
            return Response({'error': 'User not found'}, status=404)
        except AuthorProfile.DoesNotExist:
            return Response({'error': 'Profile not found'}, status=404)

class ApproveEditorView(APIView):
    permission_classes = [AdminPermission]
    def post(self, request):
        user_id = request.data.get('user_id')
        action = request.data.get('action')  # 'approve' or 'reject'
        comment = request.data.get('comment', '')
        try:
            user = CustomUser.objects.get(id=user_id, role='editor')
            profile = EditorProfile.objects.get(user=user)
            if action == 'approve':
                profile.approval_status = 'approved'
                user.is_active = True
            elif action == 'reject':
                profile.approval_status = 'rejected'
                user.is_active = False
            else:
                return Response({'error': 'Invalid action'}, status=400)
            profile.approval_comment = comment
            profile.approved_by = request.user
            profile.save()
            user.save()
            return Response({'success': f'Editor request {action}d.'})
        except CustomUser.DoesNotExist:
            return Response({'error': 'User not found'}, status=404)
        except EditorProfile.DoesNotExist:
            return Response({'error': 'Profile not found'}, status=404)

class AccountsApiRootView(APIView):
    def get(self, request, format=None):
        return Response({
            'register': reverse('register', request=request),
            'login': reverse('login', request=request),
            'password-reset': reverse('password-reset', request=request),
            'password-reset-confirm': reverse('password-reset-confirm', request=request),
            'test-connection': reverse('test-connection', request=request),
            'social': reverse('social_login', request=request),
            # Add more as needed
        })

class AdminPanelApiRootView(APIView):
    def get(self, request, format=None):
        return Response({
            'dashboard': reverse('admin_panel:admin-dashboard', request=request),
            'articles': request.build_absolute_uri(reverse('admin_panel:articles-list', request=request)),
            'users': request.build_absolute_uri(reverse('admin_panel:users-list', request=request)),
            'logs': request.build_absolute_uri(reverse('admin_panel:logs-list', request=request)),
            'approval-requests-authors': reverse('admin_panel:approval-requests-authors', request=request),
            'approval-requests-editors': reverse('admin_panel:approval-requests-editors', request=request),
            'approve-author': reverse('admin_panel:approve-author', request=request),
            'approve-editor': reverse('admin_panel:approve-editor', request=request),
        })

class RoleChangeRequestViewSet(viewsets.ModelViewSet):
    queryset = RoleChangeRequest.objects.all()
    serializer_class = RoleChangeRequestSerializer
    permission_classes = [AdminPermission]

    @action(detail=True, methods=['post'])
    def approve(self, request, pk=None):
        req = self.get_object()
        if req.status != 'pending':
            return Response({'error': 'Request already processed'}, status=400)
        req.status = 'approved'
        req.decision_date = datetime.now()
        req.admin_comment = request.data.get('admin_comment', '')
        req.save()
        # Change user role
        user = req.user
        old_role = user.role
        user.role = req.requested_role
        user.save()
        AdminLog.objects.create(
            action='approve_role_change',
            user=request.user,
            content_type='user',
            object_id=user.id,
            description=f'Approved role change from {old_role} to {req.requested_role}'
        )
        return Response({'status': 'approved'})

    @action(detail=True, methods=['post'])
    def reject(self, request, pk=None):
        req = self.get_object()
        if req.status != 'pending':
            return Response({'error': 'Request already processed'}, status=400)
        req.status = 'rejected'
        req.decision_date = datetime.now()
        req.admin_comment = request.data.get('admin_comment', '')
        req.save()
        AdminLog.objects.create(
            action='reject_role_change',
            user=request.user,
            content_type='user',
            object_id=req.user.id,
            description=f'Rejected role change to {req.requested_role}'
        )
        return Response({'status': 'rejected'})
