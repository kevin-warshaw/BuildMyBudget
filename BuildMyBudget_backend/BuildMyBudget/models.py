from django.conf import settings
from django.db import models

class CustomUser(models.AbstractUser):
    pass

    def __str__(self):
        return self.username

class CategoryManager(models.Manager):
    # def initial_load
    def get_queryset(self):
        return super().get_queryset() #.filter(by user)

class Category(models.Model):
    budgetor = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    order = models.PositiveIntegerField()
    name = models.CharField(max_length=127)
    income_category = models.BooleanField()
    # Subcategory as bool field?

    def __str__(self):
        return self.name

    '''
    https://github.com/codeforkjeff/orgtree/blob/master/models.py
    Functions to write:
    - is_root(self)
        Category.objects.get(ancestor_rel=self)
    - get_parent(self)
        Category.objects.get(id=self.parent_category, budgetor = self.budgetor)
    - get_children(self)
    - move(self, parent) # Allow to move to new category, if parent is same as now ignore
    '''

class Entry(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    description = models.CharField(max_length=255, blank=True)
    amount = models.DecimalField(max_digits=11, decimal_places=2)
    date = models.DateTimeField()
    is_estimate = models.BooleanField()
    # time needed for date or can default value be used?
    # use_time should be bool

    def __str__(self):
        return self.description

    class Meta:
        get_latest_by = ['-date']

# Every Category itself as ancestor, null entry_descendent, 0 or more category_descendent
# Every Subcategory has an ancestor (Category), and 0 or more descendents (Entry)
# Every Entry has an ancestor (Category), null category_descendent and entry_descendent
class CategoryRelations(models.Model):
    ancestor = models.ForeignKey('Category', related_name='ancestor_rel', null=True)
    category_descendent = models.ForeignKey('Category', related_name='category_descendent_rel', null=True)
    entry_descendent = models.ForeignKey('Entry', related_name='entry_descendent_rel', null=True)
