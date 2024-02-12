 
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("",include("chatbot.urls")),

    # path('/', TemplateView.as_view(template_name='frontend/index.html')),
    path('', views.index, name='index'),
]
