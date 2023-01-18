from .models import FlashCard
from .serializers import FlashCardSerializer
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status



@api_view(['GET','POST'])
def flashcards(request):

    if request.method == "GET":
        flashcards = FlashCard.objects.all()
        serializer = FlashCardSerializer(flashcards, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = FlashCardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET","PUT","DELETE"])
def flashcards_details(request,id):

    try:
        flashcards = FlashCard.objects.get(id=id)
    except FlashCard.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "DELETE":
        flashcards.delete()
        return Response(status=status.HTTP_200_OK)
    elif request.method == "PUT":
        serializer = FlashCardSerializer(flashcards, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "GET":
        serializer = FlashCardSerializer(flashcards)
        return Response(serializer.data)
