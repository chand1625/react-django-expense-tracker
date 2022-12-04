from rest_framework import routers
from .views import ExpenseViewset

router = routers.DefaultRouter()
router.register('api/expenses', ExpenseViewset, 'expenses')

urlpatterns = router.urls