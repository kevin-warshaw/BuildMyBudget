from django.contrib import admin
from .models import Entry, Category

# Register your models here.
admin.site.register(Category)
admin.site.register(Entry)
