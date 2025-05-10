from rest_framework import serializers
from .models import FetchedNews
 
class FetchedNewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = FetchedNews
        fields = ['id', 'title', 'summary', 'content', 'source_url', 'image', 'published_at', 'category'] 