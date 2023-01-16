from django.http import HttpResponse
from django.template import loader
from flashcard.models import Flashcard
# Create your views here.

def flashcard (request):
    flashcards = Flashcard.objects.all().values()
    template = loader.get_template('flashcards.html')
    context = {
        'flashcards':flashcards
    }
    return HttpResponse(template.render(context,request))