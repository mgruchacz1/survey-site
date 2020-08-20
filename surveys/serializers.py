from rest_framework import serializers
from .models import User, SurveyStatus, Survey, Question, Choice, SurveyResponse, QuestionResponse

class UserSerializer(serializers.HyperlinkedModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email')

class SurveyStatusSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SurveyStatus
        fields = ('id','title')

class SurveySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Survey
        fields = ('id','title', 'status', 'owner', 'questions')

class QuestionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Question
        fields = ('id','text', 'survey', 'owner', 'choices')

class ChoiceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Choice
        fields = ('id','text','question', 'owner')

class SurveyResponseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SurveyResponse
        fields = ('id', 'responder', 'survey', 'responder')

class QuestionResponseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = QuestionResponse
        fields = ('id', 'survey_response', 'choice', 'responder')