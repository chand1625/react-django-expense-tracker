from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ExpenseSerializer
from .models import Expense


class ExpenseViewset(viewsets.ModelViewSet):
  serializer_class = ExpenseSerializer
  queryset = Expense.objects.all()

