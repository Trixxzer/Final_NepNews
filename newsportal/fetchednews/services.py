import requests
from datetime import datetime
from .models import FetchedNews

class NewsDataIOService:
    API_KEY = 'pub_7510089beba8b13adc5f89f71f7c4aa07ca39'
    BASE_URL = 'https://newsdata.io/api/1/news'

    @classmethod
    def fetch_nepal_news(cls):
        params = {
            'apikey': cls.API_KEY,
            'country': 'np',  # Nepal country code
            'language': 'en',  # English language
            'size': 100  # Maximum number of results
        }

        try:
            response = requests.get(cls.BASE_URL, params=params)
            response.raise_for_status()
            news_data = response.json()

            if news_data.get('status') == 'success':
                articles = news_data.get('results', [])
                saved_count = 0

                for article in articles:
                    try:
                        # Convert the date string to datetime object
                        published_at = datetime.strptime(
                            article.get('pubDate'), 
                            '%Y-%m-%d %H:%M:%S'
                        )

                        # Create or update the news article
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
                        saved_count += 1
                    except Exception as e:
                        print(f"Error processing article {article.get('article_id')}: {str(e)}")
                        continue

                return True, f'Successfully fetched and saved {saved_count} news articles'
            return False, 'Failed to fetch news from API'

        except requests.exceptions.RequestException as e:
            return False, f'Error connecting to newsdata.io: {str(e)}'
        except Exception as e:
            return False, f'Unexpected error: {str(e)}' 