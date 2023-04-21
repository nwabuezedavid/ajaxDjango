from unicodedata import name
from django.urls import path
from . views import *


urlpatterns = [
    path("", home, name="home"),
    path("JsonHome/", JsonHome, name="JsonHome"),
    path("JsonHomePst/", JsonHomePst, name="JsonHomePst"),
    path("<pk>", detail, name="detail"),
    # path("JsonHomePostgeT/<pk>/", JsonHomePostgeT, name="JsonHomePostgeT"),
    # path("JsonHomePostdELET/<pk>/", JsonHomePostdELET, name="JsonHomePostdELET"),
    path("chatHomes/", chatHomes, name="chatHome"),
]
