from django.urls import path, include
from rest_framework.routers import DefaultRouter
from surveys import views

# register viewsets with router
router = DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'surveystatus', views.SurveyStatusViewSet)
router.register(r'surveys', views.SurveyViewSet)
router.register(r'questions', views.QuestionViewSet)
router.register(r'choices', views.ChoiceViewSet)
router.register(r'surveyresponses', views.SurveyResponseViewSet)
router.register(r'questionresponses', views.QuestionResponseViewSet)

urlpatterns = [
    path('', include(router.urls)),
]