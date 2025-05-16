<<<<<<< HEAD
from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from rest_framework.authtoken.models import Token
from .models import EmailVerificationToken
from django.core.exceptions import ValidationError
from django.core.validators import validate_email

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(write_only=True, required=True)
    
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'role', 'password', 'password2')
        extra_kwargs = {
            'password': {'write_only': True},
            'role': {'required': True}
        }
    
    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return data

    def create(self, validated_data):
        validated_data.pop('password2')
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            role=validated_data['role']
        )
        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(style={'input_type': 'password'})

    def validate(self, data):
        username = data.get('username')
        password = data.get('password')

        if username and password:
            user = authenticate(username=username, password=password)
            if user:
                if user.is_active:
                    data['user'] = user
                    return data
                else:
                    raise serializers.ValidationError('User account is disabled.')
            else:
                raise serializers.ValidationError('Invalid username or password.')
        else:
            raise serializers.ValidationError('Must include "username" and "password".')


class PasswordResetRequestSerializer(serializers.Serializer):
    email = serializers.EmailField()

class PasswordResetConfirmSerializer(serializers.Serializer):
    uid = serializers.CharField()
    token = serializers.CharField()
    new_password = serializers.CharField(min_length=8, write_only=True)
=======
from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from rest_framework.authtoken.models import Token
from .models import EmailVerificationToken, UserProfile, AuthorProfile, EditorProfile, AdminProfile
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.db import transaction

User = get_user_model()

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['profile_picture']

class AuthorProfileSerializer(serializers.ModelSerializer):
    category_expertise = serializers.ChoiceField(choices=AuthorProfile.EXPERTISE_CHOICES)
    class Meta:
        model = AuthorProfile
        fields = ['bio', 'category_expertise', 'certificates', 'approval_status', 'approval_comment', 'approved_by', 'profile_picture']
        read_only_fields = ['approval_status', 'approval_comment', 'approved_by']

class EditorProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = EditorProfile
        fields = ['areas_of_oversight', 'management_responsibilities', 'approval_status', 'approval_comment', 'approved_by', 'profile_picture']
        read_only_fields = ['approval_status', 'approval_comment', 'approved_by']

class AdminProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminProfile
        fields = ['approval_document', 'profile_picture']

class UserSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(write_only=True, required=True)
    # Add extra fields for each role
    profile_picture = serializers.ImageField(write_only=True, required=False)
    bio = serializers.CharField(write_only=True, required=False)
    category_expertise = serializers.CharField(write_only=True, required=False)
    certificates = serializers.FileField(write_only=True, required=False)
    areas_of_oversight = serializers.CharField(write_only=True, required=False)
    management_responsibilities = serializers.ListField(child=serializers.CharField(), write_only=True, required=False)
    approval_document = serializers.FileField(write_only=True, required=False)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'role', 'password', 'password2',
                  'profile_picture', 'bio', 'category_expertise', 'certificates',
                  'areas_of_oversight', 'management_responsibilities', 'approval_document')
        extra_kwargs = {
            'password': {'write_only': True},
            'role': {'required': True}
        }
    
    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return data

    def create(self, validated_data):
        with transaction.atomic():
            password2 = validated_data.pop('password2')
            role = validated_data.get('role')
            # Extract profile fields
            profile_picture = validated_data.pop('profile_picture', None)
            bio = validated_data.pop('bio', None)
            category_expertise = validated_data.pop('category_expertise', None)
            certificates = validated_data.pop('certificates', None)
            areas_of_oversight = validated_data.pop('areas_of_oversight', None)
            management_responsibilities = validated_data.pop('management_responsibilities', None)
            approval_document = validated_data.pop('approval_document', None)

            user = User(
                username=validated_data['username'],
                email=validated_data['email'],
                role=role
            )
            user.set_password(validated_data['password'])
            if role in ['author', 'editor']:
                user.is_active = False
            user.save()
            # Create profile based on role
            if role == 'user':
                UserProfile.objects.create(user=user, profile_picture=profile_picture)
            elif role == 'author':
                AuthorProfile.objects.create(
                    user=user,
                    bio=bio,
                    category_expertise=category_expertise,
                    certificates=certificates,
                    approval_status='pending',
                    profile_picture=profile_picture
                )
            elif role == 'editor':
                EditorProfile.objects.create(
                    user=user,
                    areas_of_oversight=areas_of_oversight,
                    management_responsibilities=management_responsibilities or [],
                    approval_status='pending',
                    profile_picture=profile_picture
                )
            elif role == 'admin':
                AdminProfile.objects.create(user=user, approval_document=approval_document, profile_picture=profile_picture)
            return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(style={'input_type': 'password'})

    def validate(self, data):
        username = data.get('username')
        password = data.get('password')

        if username and password:
            user = authenticate(username=username, password=password)
            if user:
                if user.is_active:
                    data['user'] = user
                    return data
                else:
                    raise serializers.ValidationError('User account is disabled.')
            else:
                raise serializers.ValidationError('Invalid username or password.')
        else:
            raise serializers.ValidationError('Must include "username" and "password".')


class PasswordResetRequestSerializer(serializers.Serializer):
    email = serializers.EmailField()

class PasswordResetConfirmSerializer(serializers.Serializer):
    uid = serializers.CharField()
    token = serializers.CharField()
    new_password = serializers.CharField(min_length=8, write_only=True)
>>>>>>> 492e7e7e (Add Nepnews project)
