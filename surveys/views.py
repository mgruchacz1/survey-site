from django.shortcuts import render
from rest_framework import viewsets, permissions, generics
from surveys.permissions import IsOwnerOrReadOnly
from surveys.models import User, SurveyStatus, Survey, Question, Choice, SurveyResponse, QuestionResponse
from surveys.serializers import UserSerializer, SurveyStatusSerializer, SurveySerializer, QuestionSerializer, ChoiceSerializer, SurveyResponseSerializer, QuestionResponseSerializer

# Create your views here.
class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class SurveyStatusViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SurveyStatus.objects.all()
    serializer_class = SurveyStatusSerializer

class SurveyViewSet(viewsets.ModelViewSet):
    queryset = Survey.objects.all()
    serializer_class = SurveySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly]

class ChoiceViewSet(viewsets.ModelViewSet):
    queryset = Choice.objects.all()
    serializer_class = ChoiceSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly]