from rest_framework import serializers
from .models import AdminLog
from news.models import Article
from accounts.models import CustomUser, AuthorProfile, EditorProfile

class AdminLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminLog
        fields = '__all__'

class AdminArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'

class AdminUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'role', 'date_joined', 'is_active']

class AuthorProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuthorProfile
        fields = ['id', 'user', 'bio', 'category_expertise', 'certificates', 'approval_status', 'approval_comment', 'approved_by']
        read_only_fields = ['approval_status', 'approval_comment', 'approved_by']

class EditorProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = EditorProfile
        fields = ['id', 'user', 'areas_of_oversight', 'management_responsibilities', 'approval_status', 'approval_comment', 'approved_by']
        read_only_fields = ['approval_status', 'approval_comment', 'approved_by']