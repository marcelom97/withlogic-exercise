from django.test import TestCase
from rest_framework.test import APITestCase, APIClient

from .utils import sort

arr = ["banana", "apple", "orange"]
sorted_arr = ["apple", "banana", "orange"]

arr1 = ["banana", "apple", "orange", "apps"]
sorted_arr1 = ["apple", "apps", "banana", "orange"]


class InsertionSortTests(TestCase):
    def test_array(self):
        self.assertEqual(sort(arr), sorted_arr)
        self.assertEqual(sort(arr1), sorted_arr1)


class SortEndpointTests(APITestCase):
    def setUp(self):
        self.client = APIClient()

    def test_input_not_array(self):
        test_dict = {"data": arr}

        request = self.client.post("/sort/", test_dict)

        self.assertEqual(request.status_code, 400)

    def test_array_input(self):
        response = self.client.post("/sort/", arr, format="json")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), sorted_arr)
