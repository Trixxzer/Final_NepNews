from django.db import models

class AdminLog(models.Model):
    action = models.CharField(max_length=255)
    user = models.ForeignKey('accounts.CustomUser', on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)
    content_type = models.CharField(max_length=100)
    object_id = models.PositiveIntegerField()
    description = models.TextField()

    class Meta:
        ordering = ['-timestamp']

    def __str__(self):
        return f"{self.user.username} - {self.action} - {self.timestamp}"

# Create your models here.
