from django.urls import path

from . import views

urlpatterns = [
    path('new', views.SubscriberCreateAPIView.as_view())
]