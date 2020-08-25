from django.contrib import admin

from .models import User, SurveyStatus, Survey, Question, Choice, SurveyResponse, QuestionResponse
# Register your models here.
admin.site.register(User)
admin.site.register(SurveyStatus)
admin.site.register(Survey)
admin.site.register(Question)
admin.site.register(Choice)
admin.site.register(SurveyResponse)
admin.site.register(QuestionResponse)
