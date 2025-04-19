from rest_framework import serializers
from .models import Article

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['id', 'title', 'content', 'category', 'status', 'created_at', 'updated_at', 'editor_comments']
        read_only_fields = ['author', 'status', 'editor_comments']