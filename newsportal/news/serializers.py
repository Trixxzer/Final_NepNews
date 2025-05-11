from rest_framework import serializers
from .models import Article, Comment, ArticleInteraction

class ArticleSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='category.name', read_only=True)
    category_id = serializers.IntegerField(write_only=True, required=True)
    status = serializers.CharField(source='get_status_display', read_only=True)

    ALLOWED_CATEGORIES = ['Technology', 'Politics', 'Science', 'Health', 'Business']

    class Meta:
        model = Article
        fields = ['id', 'title', 'content', 'category', 'category_id', 'status', 'created_at', 'updated_at', 'editor_comments']
        read_only_fields = ['author', 'status', 'editor_comments']

    def validate_category_id(self, value):
        from .models import Category
        try:
            category = Category.objects.get(id=value)
        except Category.DoesNotExist:
            raise serializers.ValidationError('Invalid category.')
        if category.name not in self.ALLOWED_CATEGORIES:
            raise serializers.ValidationError(f"Category must be one of: {', '.join(self.ALLOWED_CATEGORIES)}")
        return value

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

class EditorPublishedArticleSerializer(serializers.ModelSerializer):
    author = serializers.CharField(source='author.username', read_only=True)
    category = serializers.CharField(source='category.name', read_only=True)
    date = serializers.SerializerMethodField()
    excerpt = serializers.SerializerMethodField()
    views = serializers.SerializerMethodField()
    comments = serializers.SerializerMethodField()
    status = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = ['id', 'title', 'author', 'category', 'date', 'views', 'comments', 'excerpt', 'status']

    def get_date(self, obj):
        return obj.created_at.strftime("%b %d, %Y")
    
    def get_excerpt(self, obj):
        # Get first 100 characters of content as excerpt
        return obj.content[:100] + '...' if len(obj.content) > 100 else obj.content

    def get_views(self, obj):
        # Get total views from ArticleInteraction
        return ArticleInteraction.objects.filter(article=obj).count()

    def get_comments(self, obj):
        # Get total comments
        return Comment.objects.filter(article=obj).count()

    def get_status(self, obj):
        # Return 'published' instead of 'approved'
        return 'published' if obj.status == 'approved' else obj.status

class EditorPendingReviewArticleSerializer(serializers.ModelSerializer):
    author = serializers.CharField(source='author.username', read_only=True)
    category = serializers.CharField(source='category.name', read_only=True)
    date = serializers.SerializerMethodField()
    excerpt = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = ['id', 'title', 'author', 'category', 'date', 'excerpt', 'status']

    def get_date(self, obj):
        return obj.created_at.strftime("%b %d, %Y")
    
    def get_excerpt(self, obj):
        return obj.content[:100] + '...' if len(obj.content) > 100 else obj.content

class AuthorDraftArticleSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='category.name', read_only=True)
    date = serializers.SerializerMethodField()
    status = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = ['id', 'title', 'category', 'date', 'status']

    def get_date(self, obj):
        return obj.created_at.strftime("%b %d, %Y")
    
    def get_status(self, obj):
        return 'draft' if obj.status == 'draft' else obj.status

class AuthorPendingReviewArticleSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='category.name', read_only=True)
    date = serializers.SerializerMethodField()
    status = serializers.SerializerMethodField()
    editorial_feedback = serializers.CharField(source='editor_comments', read_only=True)

    class Meta:
        model = Article
        fields = ['id', 'title', 'category', 'date', 'status', 'editorial_feedback']

    def get_date(self, obj):
        return obj.created_at.strftime("%b %d, %Y")
    
    def get_status(self, obj):
        return 'pending' if obj.status == 'pending' else obj.status

class AuthorUpdatesArticleSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='category.name', read_only=True)
    date = serializers.SerializerMethodField()
    views = serializers.SerializerMethodField()
    status = serializers.SerializerMethodField()
    editorial_feedback = serializers.CharField(source='editor_comments', read_only=True)
    content = serializers.CharField(read_only=True)

    class Meta:
        model = Article
        fields = ['id', 'title', 'category', 'date', 'status', 'views', 'editorial_feedback', 'content']

    def get_date(self, obj):
        return obj.created_at.strftime("%b %d, %Y")
    
    def get_status(self, obj):
        if obj.status == 'approved':
            return 'published'
        elif obj.status == 'rejected':
            return 'rejected'
        return obj.status
    
    def get_views(self, obj):
        from .models import ArticleInteraction
        return ArticleInteraction.objects.filter(article=obj).count()