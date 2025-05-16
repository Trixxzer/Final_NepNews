from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    default_categories = [
        {'name': 'Politics', 'slug': 'politics'},
        {'name': 'Business', 'slug': 'business'},
        {'name': 'Technology', 'slug': 'technology'},
        {'name': 'Entertainment', 'slug': 'entertainment'},
        {'name': 'Sports', 'slug': 'sports'},
        {'name': 'Health', 'slug': 'health'},
        {'name': 'Education', 'slug': 'education'},
        {'name': 'World News', 'slug': 'world-news'},
        {'name': 'Local News', 'slug': 'local-news'},
        {'name': 'Science', 'slug': 'science'},
        {'name': 'Environment', 'slug': 'environment'},
        {'name': 'Culture', 'slug': 'culture'},
        {'name': 'Opinion', 'slug': 'opinion'}
    ]
    
    for category in default_categories:
        Category.objects.create(**category)

def remove_default_categories(apps, schema_editor):
    Category = apps.get_model('news', 'Category')
    Category.objects.all().delete()

class Migration(migrations.Migration):
    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_categories, remove_default_categories),
    ]
from django.db import migrations

def create_default_categories(apps, schema_editor):
    Category = apps.get