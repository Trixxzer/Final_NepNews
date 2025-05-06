from django.urls import path
from . import views

urlpatterns = [
    path('', views.news_list_api, name='news_list_api'),  # ✅ Correct name
    path('news/fetch-news/', views.fetch_news_api, name='fetch-news-api'),
]
