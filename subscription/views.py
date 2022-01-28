from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status

from .models import Subscriber
from .serializers import SubscriberSerializer
from .services import subscribe_confirmation


class SubscriberCreateAPIView(CreateAPIView):
    queryset = Subscriber.objects.all()
    serializer_class = SubscriberSerializer
    permission_classes = (AllowAny,)

    def perform_create(self, serializer):
        subscriber = serializer.save()
        subscribe_confirmation(subscriber)
