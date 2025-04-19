from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AuthorArticleViewSet, author_api_overview

router = DefaultRouter()
router.register(r'articles', AuthorArticleViewSet, basename='author-articles')

urlpatterns = [
    path('author/', include(router.urls)),
    path('author/overview/', author_api_overview, name='author-api-overview'),
]