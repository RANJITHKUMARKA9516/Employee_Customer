from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Department, Employee
from .serializers import DepartmentSerializer, EmployeeSerializer


class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class DashboardAPIView(APIView):
    def get(self, request):
        total_employees = Employee.objects.count()

        active_employees = Employee.objects.filter(
            status="Active"
        ).count()

        inactive_employees = Employee.objects.filter(
            status="Inactive"
        ).count()

        total_departments = Department.objects.count()

        recent_employees = Employee.objects.order_by(
            "-created_at"
        )[:5]

        serializer = EmployeeSerializer(
            recent_employees,
            many=True,
        )

        return Response(
            {
                "totalEmployees": total_employees,
                "activeEmployees": active_employees,
                "inactiveEmployees": inactive_employees,
                "totalDepartments": total_departments,
                "recentEmployees": serializer.data,
            }
        )