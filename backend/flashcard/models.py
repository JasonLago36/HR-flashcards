from django.db import models

# Create your models here.
class Flashcard(models.Model):
    question = models.CharField(max_length=255)
    answer = models.CharField(max_length=255)
    example = models.CharField(max_length=55)