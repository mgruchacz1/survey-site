from django.contrib import admin

from .models import User, SurveyStatus
# Register your models here.
admin.site.register(User)
admin.site.register(SurveyStatus)
