from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FetchedNewsViewSet

router = DefaultRouter()
router.register(r'fetched-news', FetchedNewsViewSet)

urlpatterns = [
    path('', include(router.urls)),
] 