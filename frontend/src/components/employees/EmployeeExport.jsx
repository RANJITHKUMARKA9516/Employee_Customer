import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import { exportEmployeesToExcel } from "../../utils/exportEmployees";

function EmployeeExport({ employees }) {
  function exportToPDF() {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Employee Report", 14, 20);

    autoTable(doc, {
      startY: 30,
      head: [[
        "ID",
        "Name",
        "Department",
        "Designation",
        "Salary",
        "Status",
      ]],
      body: employees.map((employee) => [
        employee.id,
        employee.name,
        employee.department_name,
        employee.designation,
        employee.salary,
        employee.status,
      ]),
    });

    doc.save("employees.pdf");
  }

  return (
    <div className="flex gap-3">
      <button
        onClick={() =>
          exportEmployeesToExcel(employees)
        }
        className="rounded-lg bg-green-600 px-5 py-3 font-medium text-white hover:bg-green-700"
      >
        📊 Export Excel
      </button>

      <button
        onClick={exportToPDF}
        className="rounded-lg bg-red-600 px-5 py-3 font-medium text-white hover:bg-red-700"
      >
        📄 Export PDF
      </button>
    </div>
  );
}

export default EmployeeExport;