from rest_framework import serializers
from .models import Article, Comment, ArticleInteraction

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['id', 'title', 'content', 'category', 'status', 'created_at', 'updated_at', 'editor_comments']
        read_only_fields = ['author', 'status', 'editor_comments']

class CommentSerializer(serializers.ModelSerializer):
    user_name = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Comment
        fields = ['id', 'content', 'user_name', 'created_at', 'updated_at']
        read_only_fields = ['user']

class ArticleInteractionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleInteraction
        fields = ['liked', 'disliked']

class EditorDashboardArticleSerializer(serializers.ModelSerializer):
    author = serializers.CharField(source='author.username', read_only=True)
    category = serializers.CharField(source='category.name', read_only=True)
    date = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = ['id', 'title', 'author', 'category', 'date']

    def get_date(self, obj):
        return obj.created_at.strftime("%b %d, %Y")