from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib import messages


# Create your views here.
def index(request):
    if(request.user.is_authenticated):
        return redirect('/')
    return render(request, 'auth.html')


def user_login(request):
    if (request.user.is_authenticated):
        return redirect('/')
    if request.method == 'POST':
        print(request.POST)
        email = request.POST.get("login-email",False)
        password = request.POST.get("login-password",False)
        user = authenticate(request, username=email, password=password)
        if (not email or not password):
            return redirect('auth')
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            return redirect('auth')
    return redirect('auth')


def user_register(request):
    if (request.user.is_authenticated):
        return redirect('/')
    if request.method == 'POST':
        print(request.POST)
        username = request.POST.get("register-name",False)
        email = request.POST.get("register-email",False)
        password = request.POST.get("register-password",False)
        first_name = request.POST.get("register-name",False).split(" ",1)[0]
        last_name = request.POST.get("register-name",False).split(" ",1)[1]
        if(not username or not email or not password):
            return redirect('auth')
        user = User.objects.create_user(email, email, password,first_name=first_name,last_name=last_name)
        login(request, user)
        user.save()
        return redirect('home')
    return redirect('auth')

def user_logout(request):
    logout(request)
    return redirect('home')