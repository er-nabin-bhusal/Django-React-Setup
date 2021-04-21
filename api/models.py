from django.db import models


# Create your models here.
class Room(models.Model):
    code = models.CharField(max_length=8, unique=True)
    host = models.CharField(max_length=50, unique=True)
    votes_to_skip = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)
