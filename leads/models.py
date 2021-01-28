from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Lead(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200, unique=True)
    message = models.TextField(max_length=1000)
    owner = models.ForeignKey(User, related_name='leads', null=True, on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'{self.name}'

