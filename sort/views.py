from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render
from rest_framework.views import APIView

from .utils import sort


def index(request):
    return render(request, "home.html")


class SortView(APIView):
    def post(self, request):
        data = request.data

        if type(data) != list:
            content = {"error": "Bad input, the data must be an array of strings."}
            return Response(data=content, status=status.HTTP_400_BAD_REQUEST)

        sorted_data = sort(data)
        return Response(data=sorted_data)
