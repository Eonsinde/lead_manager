from django.contrib import admin
from leads.models import *

# Register your models here.


@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    pass
