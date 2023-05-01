from django.contrib import admin

from favourite.models import Favourite
from player.models import Podcast

# Register your models here.
admin.site.register(Podcast)
admin.site.register(Favourite)