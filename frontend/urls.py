from django.urls import path
from frontend import views

# write your urlpatterns here

urlpatterns = [
    path('', views.index)
]