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

class EntrySerializer(serializers.ModelSerializer):
  class Meta:
    fields = ['description', 'amount', 'date', 'is_estimate']
    model = models.Entry

class DetailedCategorySerializer(serializers.ModelSerializer):
  # entries = serializers.SlugRelatedField(
  #   many=True,
  #   slug_field='amount'
  #   )
  entries = EntrySerializer(many=True)
  child = CategorySerializer()

  class Meta:
    model = models.Category
    fields = ['name', 'entries', 'child']
    # fields = "__all__"
