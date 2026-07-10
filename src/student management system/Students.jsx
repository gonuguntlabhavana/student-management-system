function Students({ students }) {
  return (
    <div className="students">

      <h1>Students List</h1>

      {students.length === 0 ? (
        <h3>No Students Added</h3>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll No</th>
              <th>Department</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Address</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.roll}</td>
                <td>{student.department}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.gender}</td>
                <td>{student.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
}

export default Students;