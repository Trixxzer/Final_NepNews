from django.shortcuts import render, get_object_or_404, redirect
from .models import News
from .forms import NewsForm
from .news_api import fetch_news_data
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create a news article
def create_news(request):
    if request.method == 'POST':
        form = NewsForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('news_list')
    else:
        form = NewsForm()
    return render(request, 'news/create_news.html', {'form': form})

# Read (list all news articles)
def news_list(request):
    local_news = News.objects.all().order_by('-published_date')
    api_news = fetch_news_data()  # Fetch news from the API
    return render(request, 'news/news_list.html', {'local_news': local_news, 'api_news': api_news})

# Update a news article
def update_news(request, pk):
    news_item = get_object_or_404(News, pk=pk)
    if request.method == 'POST':
        form = NewsForm(request.POST, request.FILES, instance=news_item)
        if form.is_valid():
            form.save()
            return redirect('news_list')
    else:
        form = NewsForm(instance=news_item)
    return render(request, 'news/update_news.html', {'form': form})

# Delete a news article
def delete_news(request, pk):
    news_item = get_object_or_404(News, pk=pk)
    if request.method == 'POST':
        news_item.delete()
        return redirect('news_list')
    return render(request, 'news/delete_news.html', {'news_item': news_item})

# API Endpoint: Fetch news as JSON for frontend/API usage
@api_view(['GET'])
def fetch_news_api(request):
    try:
        data = fetch_news_data()
        return Response({"status": "success", "data": data})
    except Exception as e:
        return Response({"status": "error", "message": str(e)}, status=500)
