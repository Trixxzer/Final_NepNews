from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone
import uuid
from django.core.mail import send_mail
from django.conf import settings

class CustomUser(AbstractUser):
    ROLE_CHOICES = [
        ('reader', 'Reader'),
        ('author', 'Author'),
        ('editor', 'Editor'),
    ]
    
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='reader')
    is_verified = models.BooleanField(default=False)
    
    def __str__(self):
        return self.username

class EmailVerificationToken(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    token = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def send_verification_email(self, request):
        verify_url = f"{settings.FRONTEND_URL}/verify-email/{self.token}/"
        subject = "Verify Your Email Address"
        message = f"Click the link to verify your email: {verify_url}"
        send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, [self.user.email])

class PasswordResetToken(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    token = models.UUIDField(default=uuid.uuid4, unique=True, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField()

    def is_expired(self):
        return timezone.now() > self.expires_at

    def __str__(self):
        return f"PasswordResetToken for {self.user.username}"