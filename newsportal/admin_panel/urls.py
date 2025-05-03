from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    DashboardView,
    AdminArticleViewSet,
    AdminUserViewSet,
    AdminLogViewSet
)

router = DefaultRouter()
router.register(r'articles', AdminArticleViewSet)
router.register(r'users', AdminUserViewSet)
router.register(r'logs', AdminLogViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('dashboard/', DashboardView.as_view(), name='admin-dashboard'),
]