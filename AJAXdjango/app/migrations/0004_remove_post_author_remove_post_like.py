# Generated by Django 4.0.6 on 2022-12-29 18:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_alter_post_created_alter_post_update'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='author',
        ),
        migrations.RemoveField(
            model_name='post',
            name='like',
        ),
    ]
