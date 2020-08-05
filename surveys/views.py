from django.shortcuts import render
from rest_framework import generics
from .models import User, SurveyStatus, Survey, Question, Choice, SurveyResponse, QuestionResponse
from .serializers import UserSerializer, SurveyStatusSerializer, SurveySerializer, QuestionSerializer, ChoiceSerializer, SurveyResponseSerializer, QuestionResponseSerializer

# Create your views here.
class SurveyStatusList(generics.ListCreateAPIView):
    queryset = SurveyStatus.objects.all()
    serializer_class = SurveyStatusSerializer