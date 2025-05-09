from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from django.core.mail import send_mail
from django.conf import settings
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.contrib.auth import get_user_model
from .serializers import UserSerializer, LoginSerializer, PasswordResetRequestSerializer, PasswordResetConfirmSerializer, AuthorProfileSerializer, EditorProfileSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions
from .models import AuthorProfile, EditorProfile, CustomUser
from rest_framework.reverse import reverse
from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter

User = get_user_model()

class RegisterView(APIView):
    def get(self, request):
        return Response({
            "message": "Please send a POST request with the following fields to register",
            "required_fields": {
                "username": "your username",
                "email": "your email",
                "password": "your password",
                "password2": "confirm password",
                "role": "select one: user, author, editor, or admin"
            }
        })

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token, _ = Token.objects.get_or_create(user=user)
            return Response({
                'token': token.key,
                'user_id': user.id,
                'username': user.username,
                'role': user.role
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# For Login
class LoginView(APIView):
    def get(self, request):
        # Return a simple response for GET requests
        return Response({
            "message": "Please send a POST request with username and password to login",
            "required_fields": {
                "username": "your username",
                "password": "your password"
            }
        })

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            token, _ = Token.objects.get_or_create(user=user)
            return Response({
                'token': token.key,
                'user_id': user.id,
                'username': user.username,
                'role': user.role
            }, status=status.HTTP_200_OK)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# For Password Reset
class PasswordResetView(APIView):
    def post(self, request):
        serializer = PasswordResetRequestSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            try:
                user = User.objects.get(email=email)
                # Generate token
                token = default_token_generator.make_token(user)
                uid = urlsafe_base64_encode(force_bytes(user.pk))
                
                # Create reset link
                reset_link = f"{settings.FRONTEND_URL}/reset-password/{uid}/{token}"
                
                # Send email
                send_mail(
                    'Password Reset for NepNews',
                    f'Click the following link to reset your password: {reset_link}',
                    settings.DEFAULT_FROM_EMAIL,
                    [email],
                    fail_silently=False,
                )
                return Response({'message': 'Password reset email sent successfully'})
            except User.DoesNotExist:
                return Response({'error': 'No user found with this email'}, 
                              status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# For Password Reset Confirm
class PasswordResetConfirmView(APIView):
    def post(self, request):
        serializer = PasswordResetConfirmSerializer(data=request.data)
        if serializer.is_valid():
            try:
                uid = force_str(urlsafe_base64_decode(serializer.validated_data['uid']))
                user = User.objects.get(pk=uid)
                
                # Verify token
                if default_token_generator.check_token(user, serializer.validated_data['token']):
                    user.set_password(serializer.validated_data['new_password'])
                    user.save()
                    return Response({'message': 'Password reset successful'})
                else:
                    return Response({'error': 'Invalid or expired token'}, 
                                  status=status.HTTP_400_BAD_REQUEST)
            except (TypeError, ValueError, OverflowError, User.DoesNotExist):
                return Response({'error': 'Invalid reset link'}, 
                              status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TestConnectionView(APIView):
    def get(self, request):
        return Response({"message": "Backend is connected!"}, status=status.HTTP_200_OK)

class IsAdminRole(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == 'admin'

class ApprovalRequestListView(APIView):
    permission_classes = [IsAuthenticated, IsAdminRole]
    def get(self, request):
        author_pending = AuthorProfile.objects.filter(approval_status='pending')
        editor_pending = EditorProfile.objects.filter(approval_status='pending')
        authors = AuthorProfileSerializer(author_pending, many=True).data
        editors = EditorProfileSerializer(editor_pending, many=True).data
        return Response({
            'pending_authors': authors,
            'pending_editors': editors
        })

class ApproveRequestView(APIView):
    permission_classes = [IsAuthenticated, IsAdminRole]
    def post(self, request):
        user_id = request.data.get('user_id')
        role = request.data.get('role')
        action = request.data.get('action')  # 'approve' or 'reject'
        comment = request.data.get('comment', '')
        try:
            user = CustomUser.objects.get(id=user_id, role=role)
            if role == 'author':
                profile = AuthorProfile.objects.get(user=user)
            elif role == 'editor':
                profile = EditorProfile.objects.get(user=user)
            else:
                return Response({'error': 'Invalid role'}, status=400)
            if action == 'approve':
                profile.approval_status = 'approved'
                user.is_active = True
            elif action == 'reject':
                profile.approval_status = 'rejected'
                user.is_active = False
            else:
                return Response({'error': 'Invalid action'}, status=400)
            profile.approval_comment = comment
            profile.approved_by = request.user
            profile.save()
            user.save()
            return Response({'success': f'{role.capitalize()} request {action}d.'})
        except CustomUser.DoesNotExist:
            return Response({'error': 'User not found'}, status=404)
        except (AuthorProfile.DoesNotExist, EditorProfile.DoesNotExist):
            return Response({'error': 'Profile not found'}, status=404)

class AccountsApiRootView(APIView):
    def get(self, request, format=None):
        return Response({
            'register': reverse('register', request=request),
            'login': reverse('login', request=request),
            'logout': reverse('logout', request=request),
            'password-reset': reverse('password-reset', request=request),
            'password-reset-confirm': reverse('password-reset-confirm', request=request),
            'test-connection': reverse('test-connection', request=request),
            'social': reverse('google_login', request=request),
        })

class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        # If signup, set role to 'user'
        if response.status_code == 201:
            user = CustomUser.objects.get(email=response.data['user']['email'])
            if user.role != 'user':
                user.role = 'user'
                user.save()
        # If login, only allow if role is 'user'
        if response.status_code == 200:
            user = CustomUser.objects.get(email=response.data['user']['email'])
            if user.role != 'user':
                return Response({'error': 'Google login is only allowed for users with role "user".'}, status=status.HTTP_403_FORBIDDEN)
        return response

class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            # Delete the auth token
            request.user.auth_token.delete()
            return Response({
                'message': 'Successfully logged out.'
            }, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({
                'error': 'Error during logout.'
            }, status=status.HTTP_400_BAD_REQUEST)