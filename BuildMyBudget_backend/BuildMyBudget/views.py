from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ModelViewSet
from .models import CustomUser, Category, Entry
from .serializers import CustomUserSerializer, CategorySerializer, EntrySerializer, DetailedCategorySerializer

class CustomUserViewSet(ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [AllowAny]

# https://stackoverflow.com/questions/59006151/django-rest-framework-return-multiple-models-nested
class DetailedCategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    # def get_queryset(self):
    #     return Category.objects.

    serializer_class = DetailedCategorySerializer
    permission_classes = [AllowAny]

# class CategoryViewSet(ModelViewSet):
#     queryset = Category.objects.all()
#     serializer_class = CategorySerializer
#     permission_classes = [AllowAny]

class EntryViewSet(ModelViewSet):
    queryset = Entry.objects.all()
    serializer_class = EntrySerializer
    permission_classes = [AllowAny]
