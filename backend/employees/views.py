from rest_framework.generics import ListAPIView

from .models import Employee
from .serializers import EmployeeSerializer


class EmployeeListAPIView(ListAPIView):
    queryset = Employee.objects.all()

    serializer_class = EmployeeSerializer