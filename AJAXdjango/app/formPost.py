from django import forms

from . models import UserDetail,Post


from django.forms import ModelForm

class PostForm(ModelForm):
    class Meta:
        model = Post
        fields = [  'title',  'body' ]
    
