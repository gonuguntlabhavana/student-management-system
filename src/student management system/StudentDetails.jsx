import { useState } from "react";

function StudentDetails({ addStudent }) {
  const [student, setStudent] = useState({
    name: "",
    roll: "",
    department: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addStudent(student);

    alert("Student Added Successfully!");

    setStudent({
      name: "",
      roll: "",
      department: "",
      email: "",
      phone: "",
      gender: "",
      address: "",
    });
  };

  return (
    <div className="form-container">
      <h1>Student Registration</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="roll"
          placeholder="Roll Number"
          value={student.roll}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={student.department}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={student.phone}
          onChange={handleChange}
          required
        />

        <select
          name="gender"
          value={student.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <textarea
          name="address"
          placeholder="Address"
          value={student.address}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default StudentDetails;