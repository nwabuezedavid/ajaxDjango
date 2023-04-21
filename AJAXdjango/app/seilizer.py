from rest_framework import serializers

from . models import *



class Acticelsserializers(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title',   'body',  'created',   'update',]