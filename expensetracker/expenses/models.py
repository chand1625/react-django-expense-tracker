from django.db import models


class Expense(models.Model):
  title = models.CharField(max_length=50)
  amount = models.IntegerField()
  date = models.DateTimeField()