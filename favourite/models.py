from django.contrib.auth.models import User
from django.db import models

from player.models import Podcast


# Create your models here.
class Favourite(models.Model):
    uid = models.ForeignKey(User, on_delete=models.CASCADE)
    pid = models.ForeignKey(Podcast, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.uid) + "-" + str(self.pid)
