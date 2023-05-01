from django.db import models
from django import forms


# Create your models here.
class Podcast(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    pid = models.AutoField(primary_key=True)
    category = models.CharField(max_length=255)
    isVideo = models.BooleanField()
    media = models.FileField(upload_to='media/')
    thumbnail = models.ImageField(upload_to='media/thumbnail')

    def __str__(self):
        return str(self.pid) + ") " + self.title + " ~ " + self.author
