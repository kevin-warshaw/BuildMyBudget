from . import views
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register('categories', views.ParentCategoryViewSet, "categories")
router.register('entries', views.EntryViewSet, "entries")

urlpatterns = router.urls
