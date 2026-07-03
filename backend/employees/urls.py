from django.urls import include, path

from rest_framework.routers import DefaultRouter

from .views import (
    DepartmentViewSet,
    EmployeeViewSet,
    DashboardAPIView,
)

router = DefaultRouter()

router.register(
    "employees",
    EmployeeViewSet,
    basename="employees",
)

router.register(
    "departments",
    DepartmentViewSet,
    basename="departments",
)

urlpatterns = [
    path("", include(router.urls)),
    path("dashboard/", DashboardAPIView.as_view()),
]