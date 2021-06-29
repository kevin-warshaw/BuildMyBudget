from rest_framework import serializers
from . import models

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = models.CustomUser

class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        fields = ['description', 'amount', 'date', 'is_estimate']
        model = models.Entry

class CategorySerializer(serializers.ModelSerializer):
    entries = EntrySerializer(many=True)

    class Meta:
        fields = ['name', 'entries']
        model = models.Category

class DetailedCategorySerializer(serializers.ModelSerializer):
    subcategories = CategorySerializer(many=True)

    class Meta:
        model = models.Category
        fields = ['name', 'subcategories']
