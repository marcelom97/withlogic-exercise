from django.urls import path

from . import views
from .views import SortView

app_name = 'sort'
urlpatterns = [
    path('', views.index, name='index'),
    path('sort/', SortView.as_view(), name='sort'),
]
