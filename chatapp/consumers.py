from channels.generic.websocket import AsyncWebsocketConsumer
import json

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_group_name = 'chatroom'
        self.username = self.scope['query_string'].decode().split('=')[1] if b'username=' in self.scope['query_string'] else 'Anonymous'

        # Join room group
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        await self.accept()

        # Notify others
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'user_join',
                'username': self.username,
            }
        )

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )
        # Notify others
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'user_leave',
                'username': self.username,
            }
        )

    async def receive(self, text_data):
        data = json.loads(text_data)
        message = data.get('message')
        username = self.username
        # Broadcast message
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message,
                'username': username,
            }
        )

    async def chat_message(self, event):
        await self.send(text_data=json.dumps({
            'type': 'message',
            'message': event['message'],
            'username': event['username'],
        }))

    async def user_join(self, event):
        await self.send(text_data=json.dumps({
            'type': 'join',
            'username': event['username'],
        }))

    async def user_leave(self, event):
        await self.send(text_data=json.dumps({
            'type': 'leave',
            'username': event['username'],
        })) 