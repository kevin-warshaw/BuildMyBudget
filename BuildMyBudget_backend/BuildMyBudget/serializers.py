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

class SubcategorySerializer(serializers.ModelSerializer):
    entries = EntrySerializer(many=True)

    class Meta:
        fields = ['name', 'order', 'entries']
        model = models.Category

class ParentCategorySerializer(serializers.ModelSerializer):
    subcategories = SubcategorySerializer(many=True)

    class Meta:
        fields = ['name', 'order', 'income_category', 'subcategories']
        model = models.Category
