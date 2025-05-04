from django.db import models
from django.utils import timezone

class News(models.Model):
    title = models.CharField(max_length=300)
    link = models.URLField()
    pub_date = models.DateTimeField(default=timezone.now)  # ✅ Provides default to fix migration
    source = models.CharField(max_length=100, blank=True, null=True)
    content = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title
