from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class User(AbstractUser):
    """ use existing user"""

class SurveyStatus(models.Model):
    title = models.CharField(max_length=16, blank=False)

    def __str__(self):
        return self.title

def get_default_survey_status():
    SurveyStatus.objects.get_or_create(id=1)
    return 1
    
class Survey(models.Model):
    title = models.CharField(max_length=100)
    owner = models.ForeignKey(User, related_name='created_surveys', on_delete=models.CASCADE, null=True)
    status = models.ForeignKey(SurveyStatus, null=True, on_delete=models.SET_DEFAULT, default=get_default_survey_status)

    def __str__(self):
        return self.title

class Question(models.Model):
    text = models.CharField(max_length=100)
    survey = models.ForeignKey(Survey, related_name='questions', on_delete=models.CASCADE, null=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.text

class Choice(models.Model):
    text = models.CharField(max_length=100)
    question = models.ForeignKey(Question, related_name='choices', on_delete=models.CASCADE, null=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.text

class SurveyResponse(models.Model):
    responder = models.ForeignKey(User, related_name='responded_surveys', on_delete=models.CASCADE, null=True)
    survey = models.ForeignKey(Survey, related_name='responses', on_delete=models.CASCADE, blank=False)

class QuestionResponse(models.Model):
    survey_response = models.ForeignKey(SurveyResponse, related_name='questions', on_delete=models.CASCADE, blank=False)
    question = models.ForeignKey(Question, on_delete=models.CASCADE, blank=False)
    choice = models.ForeignKey(Choice, on_delete=models.CASCADE, blank=False)
