from rest_framework import viewsets, permissions
from leads.serializers import LeadSerializer
from leads.models import Lead

# this is where we write our view sets that will determine what is returned to a user


class LeadViewSets(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    serializer_class = LeadSerializer

    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


