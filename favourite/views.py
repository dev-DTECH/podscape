from django.http import HttpResponse
from django.shortcuts import render

from favourite.models import Favourite


# Create your views here.

def add(request, pid):
    if not request.user.is_athenticated:
        return HttpResponse("User not authenticated")
    if request.method == 'put':
        fav = Favourite(pid=pid, uid=request.user.username)
        fav.save()
        return HttpResponse("Successfully added to favourites")
    else:
        return HttpResponse("Error adding to favourites")


def remove(request, pid):
    if not request.user.is_athenticated:
        return HttpResponse("User not authenticated")
    if request.method == 'put':
        fav = Favourite.objects.get(pid=pid, uid=request.user.username)
        fav.delete()
        return HttpResponse("Successfully removed to favourites")
    else:
        return HttpResponse("Error removing to favourites")
