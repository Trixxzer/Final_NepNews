from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.authtoken import views  # Import the token authentication view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('accounts.urls')),
    path('api/', include('news.urls')),
    path('api/admin/', include('admin_panel.urls')),  
    path('api/fetchednews/', include('fetchednews.urls')),
    path('', RedirectView.as_view(url='/api/auth/login/', permanent=False)),

    # DRF token authentication
    path('api-token-auth/', views.obtain_auth_token, name='api-token-auth'),

    # Added allauth
    path('accounts/', include('allauth.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
