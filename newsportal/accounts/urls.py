from django.urls import path
from .views import RegisterView, LoginView, PasswordResetView, PasswordResetConfirmView, TestConnectionView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('password-reset/', PasswordResetView.as_view(), name='password-reset'),
    path('password-reset-confirm/', PasswordResetConfirmView.as_view(), name='password-reset-confirm'),
    path('test-connection/', TestConnectionView.as_view(), name='test-connection'),
]