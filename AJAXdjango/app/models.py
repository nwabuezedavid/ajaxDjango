from turtle import update
from django.db import models

# Create your models here.

from django.contrib.auth.models import User


class UserDetail(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    img = models.ImageField( upload_to="profile", blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    created = models.DateTimeField( auto_now_add=True)
    update = models.DateTimeField( auto_now=True)
     
    

    def __str__(self):
        return  f" User that create the post i ${self.user.username}"


class Post(models.Model):
    title = models.CharField( max_length=500)
    body = models.TextField(blank=True, null=True)
    created = models.DateTimeField( auto_now_add=True, blank=True, null=True)
    update = models.DateTimeField( auto_now=True, blank=True, null=True)
     
    

    def __str__(self):
        return  f" User that create the post i $-- ${self.title}"


