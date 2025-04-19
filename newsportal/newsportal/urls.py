from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView
from rest_framework.routers import DefaultRouter
from news.views import AuthorArticleViewSet

router = DefaultRouter()
router.register(r'author/articles', AuthorArticleViewSet, basename='author-articles')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('accounts.urls')),
    path('api/', include('news.urls')),
    path('', RedirectView.as_view(url='/api/auth/login/', permanent=False)),
]
