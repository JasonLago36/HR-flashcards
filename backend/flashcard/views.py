# from django.http import HttpResponse
# from django.template import loader
from flashcard.models import Flashcard
from django.shortcuts import render


# This is a bit easier code for rendering out your view functions

def flashcard (request):
    flashcards = Flashcard.objects.all()
    context = {
        'flashcards': flashcards
    }
    return render(request, 'flashcard/flasher.html', context)


    # flashcards = Flashcard.objects.all().values()
    # template = loader.get_template('flashcards.html')
    # context = {
    #     'flashcards':flashcards
    # }
    # return HttpResponse(template.render(context,request))
