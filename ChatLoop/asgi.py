"""
ASGI config for ChatLoop project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from django.urls import path
from channels.auth import AuthMiddlewareStack
from chatapp.consumers import ChatConsumer

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ChatLoop.settings')

# Placeholder for websocket consumers, to be updated later
websocket_urlpatterns = [
    path('ws/chat/', ChatConsumer.as_asgi()),
]

application = ProtocolTypeRouter(
    {
        "http": get_asgi_application(),
        "websocket": AuthMiddlewareStack(
            URLRouter(
                websocket_urlpatterns
            )
        ),
    }
)
