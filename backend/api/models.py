from django.db import models


class FlashCard(models.Model):
    question = models.CharField(max_length=25)
    answer = models.CharField(max_length=25)
    example = models.CharField(max_length=25)

    def __str__(self):
        return self.question
