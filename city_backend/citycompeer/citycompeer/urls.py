 
from django.contrib import admin
from django.urls import path
from chatbot.views import ChatbotAPI

urlpatterns = [
    path("admin/", admin.site.urls),
    path('chatbot/', ChatbotAPI.as_view(), name='chatbot_api'),
]
