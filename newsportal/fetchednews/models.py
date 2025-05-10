from django.db import models

# Create your models here.

class FetchedNews(models.Model):
    title = models.CharField(max_length=500)
    summary = models.TextField(null=True, blank=True)
    content = models.TextField(null=True, blank=True)
    source_url = models.URLField(max_length=1000)
    image = models.URLField(max_length=1000, null=True, blank=True)
    published_at = models.DateTimeField()
    category = models.CharField(max_length=100, null=True, blank=True)
    source_id = models.CharField(max_length=100, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    description = models.TextField(null=True, blank=True)
    image_url = models.URLField(max_length=1000, null=True, blank=True)

    class Meta:
        ordering = ['-published_at']

    def __str__(self):
        return self.title
