# Generated by Django 2.1.4 on 2020-04-09 20:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0002_auto_20190329_1641'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lead',
            name='created_at',
            field=models.DateField(auto_now_add=True),
        ),
    ]
