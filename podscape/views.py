import json
import os

from django.core.serializers import serialize
from django.core.serializers.json import DjangoJSONEncoder
from django.http import HttpResponse, FileResponse, JsonResponse
from django.shortcuts import render, redirect
from django.db.models import Q
from django.templatetags.static import static
from django.views.decorators.csrf import csrf_exempt

from player.models import Podcast


def index(request):
    # if(user):
    # print(request.user, request.user.get_full_name())
    context = {
        'user': request.user
        # 'fullname': request.user.get_full_name()
    }
    if (not request.user.is_authenticated):
        return redirect('auth/')
    return render(request, 'home.html', context)


class Upload:
    pass


video = ['.mp4']
audio = ['.mp3']


def upload(request):
    if not request.user.is_authenticated:
        return JsonResponse({'message': 'User unauthorised'}, status=401)
    if not request.user.is_superuser:
        return JsonResponse({'message': 'User must be an admin'}, status=403)
    # if (not request.user.is_superuser):
    #     return redirect('/')
    if request.method == "POST":
        title = request.POST.get("title", False)
        author = request.POST.get("author", False)
        description = request.POST.get("description", False)
        category = request.POST.get("category", False)
        media_file = request.FILES.get("media", False)
        thumbnail_file = request.FILES.get("thumbnail", False)
        ext = os.path.splitext(str(media_file))[1]
        # print(ext,media_file)
        if ext not in video and ext not in audio:
            return JsonResponse({'message': 'Unsupported media format'}, status=415)

        # print(media_file.path)

        podcast = Podcast(title=title, author=author, description=description, category=category, media=media_file,
                          thumbnail=thumbnail_file, isVideo=(ext in video))
        podcast.save()

    return render(request, 'upload.html')


def media(request, pid):
    if not request.user.is_authenticated:
        return HttpResponse("user not found")
    pc = Podcast.objects.get(pid=pid)
    media_file = open(pc.media.path, 'rb')
    response = FileResponse(media_file)
    return response


def thumbnail(request, pid):
    # if not request.user.is_authenticated:
    #     return JsonResponse({'message': 'User unauthorised'}, status=401)
    pc = Podcast.objects.get(pid=pid)
    thumbnail_file = open(pc.thumbnail.path, 'rb')
    response = FileResponse(thumbnail_file)
    return response


def search(request):
    if not request.user.is_authenticated:
        return JsonResponse({'message': 'User unauthorised'}, status=401)

    if request.method == "GET":
        query = request.GET.get("query", False)
        if (query):
            podcast = Podcast.objects.filter(title__contains=query)
        else:
            podcast = Podcast.objects.all()
        print(podcast)

        return render(request, 'search.html', {'podcast': podcast})

def newRelease(request):
    # if not request.user.is_authenticated:
    #     return JsonResponse({'message': 'User unauthorised'}, status=401)
    if request.method == "GET":
        podcast = Podcast.objects.values("pid", "title", "category").order_by("-createdAt")[:5]

        serialized_data = json.dumps(list(podcast), cls=DjangoJSONEncoder)
        serialized_data = json.loads(serialized_data)
        return JsonResponse({"podcast": serialized_data})
        # return render(request,'search.html',{'podcast': podcast})
