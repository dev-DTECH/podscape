from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("add/<str:pid>",views.add),
    path("remove/<str:pid>/",views.remove,name='player')
]