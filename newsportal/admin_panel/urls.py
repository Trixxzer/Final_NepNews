from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    DashboardView,
    AdminArticleViewSet,
    AdminUserViewSet,
    AdminLogViewSet,
    ApprovalRequestAuthorsView,
    ApprovalRequestEditorsView,
    ApproveAuthorView,
    ApproveEditorView,
    AdminPanelApiRootView,
    RoleChangeRequestViewSet,
    role_change_action
)

app_name = 'admin_panel'

router = DefaultRouter()
router.register(r'articles', AdminArticleViewSet)
router.register(r'users', AdminUserViewSet)
router.register(r'logs', AdminLogViewSet)
router.register(r'role-change-requests', RoleChangeRequestViewSet)

urlpatterns = [
    path('', AdminPanelApiRootView.as_view(), name='admin_panel-api-root'),
    path('', include(router.urls)),
    path('dashboard/', DashboardView.as_view(), name='admin-dashboard'),
    path('approval-requests/authors/', ApprovalRequestAuthorsView.as_view(), name='approval-requests-authors'),
    path('approval-requests/editors/', ApprovalRequestEditorsView.as_view(), name='approval-requests-editors'),
    path('approve-author/', ApproveAuthorView.as_view(), name='approve-author'),
    path('approve-editor/', ApproveEditorView.as_view(), name='approve-editor'),
    path('role-change/', role_change_action, name='role-change'),
]