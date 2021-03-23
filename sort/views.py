from django.http import JsonResponse, HttpResponseBadRequest
from django.shortcuts import render
from rest_framework.views import APIView

from .utils import sort


def index(request):
    return render(request, 'home.html')


class SortView(APIView):
    def post(self, request):
        data = request.data

        if type(data) != list:
            return HttpResponseBadRequest()

        sorted_data = sort(data)
        return JsonResponse(data=sorted_data, safe=False)
