from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("test/",views.test),
    path("<str:pid>/",views.player,name='player')
]