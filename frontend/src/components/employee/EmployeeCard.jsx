function EmployeeCard({
  id,
  name,
  email,
  department,
  designation,
}) {
  return (
    <div className="employee-card">
      <h2>{name}</h2>

      <p>ID : {id}</p>

      <p>Email : {email}</p>

      <p>Department : {department}</p>

      <p>Designation : {designation}</p>
    </div>
  );
}

export default EmployeeCard;