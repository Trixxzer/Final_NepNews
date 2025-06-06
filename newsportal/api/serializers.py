from rest_framework import serializers
from news.models import News

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ['id', 'title', 'link', 'pub_date', 'source', 'content']
