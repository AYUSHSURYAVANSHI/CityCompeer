 
from django.urls import path 
from .views import ChatbotAPI

urlpatterns = [
    path('chatbot/', ChatbotAPI.as_view(), name='chatbot_api'),
]


