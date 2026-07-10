import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navigation from "./student management system/Navigation";
import Home from "./student management system/Home";
import Students from "./student management system/Students";
import Teachers from "./student management system/Teachers";
import StudentDetails from "./student management system/StudentDetails";
import Contact from "./student management system/Contact";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/students"
          element={<Students students={students} />}
        />

        <Route
          path="/studentdetails"
          element={<StudentDetails addStudent={addStudent} />}
        />

        <Route path="/teachers" element={<Teachers />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;