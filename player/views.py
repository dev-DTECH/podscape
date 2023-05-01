from django.http import HttpResponse
from django.shortcuts import render

from player.models import Podcast


# Create your views here.
def index(request):
    return HttpResponse('Provide podcast ID')


def player(request, pid):
    if (not request.user.is_authenticated):
        return HttpResponse("User not found")

    pc = Podcast.objects.get(pid=pid)
    context = {
        'description': pc.description,
        'title': pc.title,
        'author': pc.author,
        'pid': pc.pid
    }
    return render(request, 'player.html', context)


def test(request):
    print(Podcast.objects.all())
    return HttpResponse(str(Podcast.objects.all()[0].media))
