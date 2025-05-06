import requests
from django.utils.dateparse import parse_datetime
from django.utils import timezone
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from news.models import News
from .serializers import NewsSerializer

# Fetch external news and save to database
@api_view(['GET'])
def fetch_news_api(request):
    api_url = "https://newsdata.io/api/1/news?apikey=pub_750981d4fb4ba5fd1df22740a52b0d4c6ef49"
    response = requests.get(api_url)

    if response.status_code == 200:
        data = response.json().get('results', [])

        saved_count = 0
        for item in data:
            news_obj, created = News.objects.get_or_create(
                title=item.get('title', '')[:300],
                link=item.get('link', ''),
                defaults={
                    'pub_date': parse_datetime(item.get('pubDate')) or timezone.now(),
                    'source': item.get('source', ''),
                    'content': item.get('content', ''),
                }
            )
            if created:
                saved_count += 1

        return JsonResponse({
            'message': 'News fetched and saved.',
            'total_fetched': len(data),
            'new_saved': saved_count
        }, status=201)

    return JsonResponse({'error': 'Failed to fetch news'}, status=400)


# Return news stored in database as JSON (for React)
@api_view(['GET'])
def news_list_api(request):
    news = News.objects.all().order_by('-pub_date')[:20]
    serializer = NewsSerializer(news, many=True)
    return Response(serializer.data)
