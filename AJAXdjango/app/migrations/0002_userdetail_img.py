# Generated by Django 4.0.6 on 2022-12-27 22:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='userdetail',
            name='img',
            field=models.ImageField(blank=True, null=True, upload_to='profile'),
        ),
    ]
