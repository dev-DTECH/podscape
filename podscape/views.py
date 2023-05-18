from django.http import HttpResponse, FileResponse
from django.shortcuts import render, redirect

from player.models import Podcast


def index(request):
    # if(user):
    # print(request.user, request.user.get_full_name())
    context = {
        'user': request.user
        # 'fullname': request.user.get_full_name()
    }
    if(not request.user.is_authenticated):
        return redirect('auth/')
    return render(request, 'home.html', context)


class Upload:
    pass


def upload(request):
    if (not request.user.is_authenticated):
        return redirect('auth/')
    if (not request.user.is_superuser):
        return redirect('/')
    if request.method == "POST":
        title = request.POST.get("title", False)
        author = request.POST.get("author", False)
        description = request.POST.get("description", False)
        category = request.POST.get("category", False)
        media_file = request.POST.get("media", False)
        thumbnail_file = request.POST.get("thumbnail", False)
        print(media_file.path)

        podcast = Podcast(title=title, author=author, description=description, category=category, media=media_file,
                          thumbnail=thumbnail_file)
        podcast.save()

    return render(request, 'upload.html')


def media(request, pid):
    if not request.user.is_authenticated:
        return HttpResponse("user not found")
    if not request.user.is_superuser:
        return HttpResponse("User must be admin")
    pc = Podcast.objects.get(pid=pid)
    media_file = open(pc.media.path, 'rb')
    response = FileResponse(media_file)
    return response


def thumbnail(request, pid):
    if not request.user.is_authenticated:
        return HttpResponse("user not found")
    if not request.user.is_superuser:
        return HttpResponse("User must be admin")
    pc = Podcast.objects.get(pid=pid)
    thumbnail_file = open(pc.thumbnail.path, 'rb')
    response = FileResponse(thumbnail_file)
    return response
