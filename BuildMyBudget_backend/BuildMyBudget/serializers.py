from rest_framework import serializers
from . import models

class CustomUserSerializer(serializers.ModelSerializer):
  class Meta:
        fields = "__all__"
        model = models.CustomUser

class CategorySerializer(serializers.ModelSerializer):
  class Meta:
        fields = "__all__"
        model = models.Category

# class DetailedCategorySerializer(serializers.ModelSerializer):
#   category = CategorySerializer()
#
#   class Meta:
#         fields = "__all__"
#         model = models.Entry

class EntrySerializer(serializers.ModelSerializer):
  class Meta:
        fields = "__all__"
        model = models.Entry
