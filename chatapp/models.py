import uuid
from django.db import models
from datetime import datetime

class ChatUsers(models.Model):
    id = models.BigAutoField(primary_key=True)
    username = models.CharField(null=False, max_length=64, unique=True)
    created_at = models.DateTimeField(default=datetime.now, null=False)
    is_deleted = models.BooleanField(default=False)

class ChatMessages(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username = models.CharField(null=False, max_length=64)
    message = models.CharField(max_length=512, null=False)
    timestamp = models.DateTimeField(null=False, default=datetime.now)
