# Generated by Django 4.1.5 on 2023-01-17 18:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("flashcard", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="flashcard",
            name="example",
            field=models.CharField(max_length=55),
        ),
    ]
