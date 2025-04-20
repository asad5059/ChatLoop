from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from chatapp.models import ChatMessages


class MessagesAPIView(APIView):
    
    # TODO: We cannot relay on this API since anyone can read messages if they have the API endpoint
    
    def get(self, request):
        """
        Returns last 100 messages
        """

        messages = ChatMessages.objects.order_by('-timestamp')[:100][::-1]

        return Response(data=messages, status=status.HTTP_200_OK)
    