from django.core.management.base import BaseCommand
from fetchednews.models import FetchedNews

class Command(BaseCommand):
    help = 'Delete all FetchedNews entries that do not mention "nepal" in title, description, or content.'

    def handle(self, *args, **options):
        count = 0
        for news in FetchedNews.objects.all():
            text = (news.title or '').lower() + (news.description or '').lower() + (news.content or '').lower()
            if 'nepal' not in text:
                news.delete()
                count += 1
        self.stdout.write(self.style.SUCCESS(f'Deleted {count} non-Nepal news articles.')) 