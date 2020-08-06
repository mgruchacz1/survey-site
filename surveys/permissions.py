""" file for custom permissions """
from rest_framework import permissions

class IsOwnerOrReadOnly(permissions.BasePermission):
    """ Custom permission, only owner of object can edit it """

    def has_object_permission(self, request, view, obj):
        # always allow access if safe method
        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.owner == request.user
