# Generated by Django 5.1.7 on 2025-05-11 05:16

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0008_adminprofile_profile_picture_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='RoleChangeRequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('requested_role', models.CharField(max_length=10)),
                ('status', models.CharField(choices=[('pending', 'Pending'), ('approved', 'Approved'), ('rejected', 'Rejected')], default='pending', max_length=10)),
                ('request_date', models.DateTimeField(auto_now_add=True)),
                ('decision_date', models.DateTimeField(blank=True, null=True)),
                ('admin_comment', models.TextField(blank=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='role_change_requests', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
