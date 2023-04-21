from re import template
from django.shortcuts import redirect, render
from . models import UserDetail,Post
from .formPost import PostForm
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from django.contrib.sites.shortcuts import get_current_site


# Create your views here.

from rest_framework.response import Response 
from rest_framework import generics 
from rest_framework import mixins 
# Create your views here.
from django.http import HttpResponse, JsonResponse
from django.core import serializers
from .seilizer import Acticelsserializers
from rest_framework .views import APIView 
from rest_framework.decorators import api_view

# @api_view(['GET','POST'])
def home(request):
    pst = Post.objects.all()
    names = str(get_current_site(request))
        
    conx = {
        "pst": pst,
        "names": names,
       
    }
     
    return render(request, "base.html", conx)

def JsonHome(request):
    if request.method == "GET":
        pst = Post.objects.all()
        selri = Acticelsserializers(pst, many=True)
        # data = serializers.serialize("json", pst)
        return JsonResponse(selri.data, safe= False)
@api_view(['POST'])        
def JsonHomePst(request):
    if request.method == "POST":
        serializer = Acticelsserializers(data= request.data)
        
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)




@api_view(['GET','PUT','DELETE'])
def detail(request,pk):

    acticelsx = Post.objects.get(pk=pk)
    if request.method =="GET":
        serializer = Acticelsserializers(acticelsx)
        return Response (serializer.data)
    elif request.method == "PUT":
        serializer = Acticelsserializers(acticelsx, data= request.data )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == "DELETE" : 
        acticelsx.delete()
        if acticelsx:
            return redirect('/')
        return Response( status=status.HTTP_204_NO_CONTENT)





def chatHomes(request):



    return render(request, "chatting.html")