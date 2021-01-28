from rest_framework import routers
from leads.api import LeadViewSets

# this is where our routers are handled

router = routers.DefaultRouter()
router.register('leads', LeadViewSets, 'leads')

urlpatterns = router.urls


