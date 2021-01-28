from rest_framework import serializers
from .models import *

# this is where we serialize our models


class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = "__all__"  # or user the names of the model's attribute using a tuple
