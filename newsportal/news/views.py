from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Article
from .serializers import ArticleSerializer

class AuthorArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Article.objects.filter(author=self.request.user)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    @action(detail=True, methods=['post'])
    def submit_for_review(self, request, pk=None):
        article = self.get_object()
        if article.status == 'draft':
            article.status = 'pending'
            article.save()
            return Response({'status': 'submitted for review'})
        return Response({'error': 'Article is not in draft status'},
                       status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['get'])
    def get_status(self, request, pk=None):
        article = self.get_object()
        return Response({
            'status': article.status,
            'editor_comments': article.editor_comments
        })


@api_view(['GET'])
def author_api_overview(request):
    api_urls = {
        'List All Articles': {
            'endpoint': '/api/author/articles/',
            'method': 'GET',
            'description': 'View all articles by the author'
        },
        'Create Article': {
            'endpoint': '/api/author/articles/',
            'method': 'POST',
            'fields': {
                'title': 'string',
                'content': 'string',
                'description': 'string',
                'image': 'file (optional)',
                'category': 'integer'
            }
        },
        'View Single Article': {
            'endpoint': '/api/author/articles/<id>/',
            'method': 'GET'
        },
        'Update Article': {
            'endpoint': '/api/author/articles/<id>/',
            'method': 'PUT/PATCH'
        },
        'Delete Article': {
            'endpoint': '/api/author/articles/<id>/',
            'method': 'DELETE'
        },
        'Submit for Review': {
            'endpoint': '/api/author/articles/<id>/submit_for_review/',
            'method': 'POST'
        },
        'Check Status': {
            'endpoint': '/api/author/articles/<id>/get_status/',
            'method': 'GET'
        }
    }
    return Response(api_urls)
