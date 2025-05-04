from django.urls import path
from . import views

urlpatterns = [
    # HTML views
    path('', views.news_list, name='news_list'),
    path('news/create/', views.create_news, name='create_news'),
    path('news/<int:pk>/edit/', views.update_news, name='update_news'),
    path('news/<int:pk>/delete/', views.delete_news, name='delete_news'),

    # ✅ API endpoint to fetch news in JSON format
    path('news/fetch-news/', views.fetch_news_api, name='fetch-news-api'),
]
