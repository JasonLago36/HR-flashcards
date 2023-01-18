from django.urls import path
from . import views


urlpatterns = [
    path("flashcard/", views.flashcards, name="home" ),
    path("flashcards/<int:id>", views.flashcards_details, name="details"),
]
