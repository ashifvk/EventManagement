from django.urls import path
from . import views


urlpatterns = [
    path('Registerapi',views.Registerapi.as_view(),name='Registerapi'),
]