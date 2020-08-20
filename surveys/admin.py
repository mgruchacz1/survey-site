from django.contrib import admin

from .models import User, SurveyStatus, Survey, Question, Choice
# Register your models here.
admin.site.register(User)
admin.site.register(SurveyStatus)
admin.site.register(Survey)
admin.site.register(Question)
admin.site.register(Choice)
