from django.urls import path, include
from .views import RegisterView, LoginView, PasswordResetView, PasswordResetConfirmView, TestConnectionView
from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter

class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('password-reset/', PasswordResetView.as_view(), name='password-reset'),
    path('password-reset-confirm/', PasswordResetConfirmView.as_view(), name='password-reset-confirm'),
    path('test-connection/', TestConnectionView.as_view(), name='test-connection'),

    path('', include('dj_rest_auth.urls')),
    path('social/', include('dj_rest_auth.registration.urls')),
    path('social/login/', GoogleLogin.as_view(), name='google_login'),
]