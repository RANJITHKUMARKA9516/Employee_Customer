from django.contrib import admin

from .models import Department, Employee


@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
        "description",
        "created_at",
    )

    search_fields = (
        "name",
    )

    ordering = (
        "name",
    )


@admin.register(Employee)
class EmployeeAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
        "email",
        "department",
        "designation",
        "status",
    )

    list_filter = (
        "department",
        "status",
    )

    search_fields = (
        "name",
        "email",
    )