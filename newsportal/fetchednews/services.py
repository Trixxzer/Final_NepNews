import requests
from datetime import datetime
from django.utils import timezone
from .models import FetchedNews

class NewsDataIOService:
    API_KEY = 'pub_7510089beba8b13adc5f89f71f7c4aa07ca39'
    BASE_URL = 'https://newsdata.io/api/1/news'

    @classmethod
    def fetch_nepal_news(cls):
        params = {
            'apikey': cls.API_KEY,
            'country': 'np',  # Only Nepal (API param, but we filter in code)
            'language': 'en',  # English news
        }
        try:
            response = requests.get(cls.BASE_URL, params=params)
            response.raise_for_status()
            news_data = response.json()
            if news_data.get('status') == 'success':
                for article in news_data.get('results', []):
                    country_list = article.get('country', [])
                    title = article.get('title', '').lower()
                    description = (article.get('description') or '').lower()
                    content = (article.get('content') or '').lower()

                    # Only save if country is exactly ['nepal'] or 'nepal' in text
                    if (
                        (isinstance(country_list, list) and len(country_list) == 1 and country_list[0].lower() == 'nepal')
                        or
                        ('nepal' in title or 'nepal' in description or 'nepal' in content)
                    ):
                        pub_date = article.get('pubDate')
                        if pub_date:
                            published_at = datetime.strptime(pub_date, '%Y-%m-%d %H:%M:%S')
                            published_at = timezone.make_aware(published_at, timezone=timezone.utc)
                        else:
                            published_at = timezone.now()
                        FetchedNews.objects.update_or_create(
                            source_id=article.get('article_id'),
                            defaults={
                                'title': article.get('title'),
                                'description': article.get('description'),
                                'content': article.get('content'),
                                'source_url': article.get('link'),
                                'image_url': article.get('image_url'),
                                'published_at': published_at,
                                'category': article.get('category')[0] if article.get('category') else None,
                            }
                        )
                return True, 'Successfully fetched Nepal news only.'
            return False, 'Failed to fetch news.'
        except requests.exceptions.RequestException as e:
            return False, f'Error connecting to newsdata.io: {str(e)}'
        except Exception as e:
            return False, f'Unexpected error: {str(e)}' 