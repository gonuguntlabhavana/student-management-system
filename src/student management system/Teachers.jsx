import { useState } from "react";

function Teachers() {
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: "Ramesh Sir",
      subject: "Python",
      experience: "10 Years",
    },
    {
      id: 2,
      name: "Anitha Madam",
      subject: "React",
      experience: "8 Years",
    },
    {
      id: 3,
      name: "Suresh Sir",
      subject: "DBMS",
      experience: "12 Years",
    },
  ]);

  const [search, setSearch] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [editedTeacher, setEditedTeacher] = useState({
    name: "",
    subject: "",
    experience: "",
  });

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    setTeachers(teachers.filter((teacher) => teacher.id !== id));
  };

  const handleEdit = (teacher) => {
    setEditingId(teacher.id);
    setEditedTeacher({
      name: teacher.name,
      subject: teacher.subject,
      experience: teacher.experience,
    });
  };

  const handleUpdate = () => {
    const updatedTeachers = teachers.map((teacher) =>
      teacher.id === editingId
        ? {
            ...teacher,
            name: editedTeacher.name,
            subject: editedTeacher.subject,
            experience: editedTeacher.experience,
          }
        : teacher
    );

    setTeachers(updatedTeachers);
    setEditingId(null);
  };

  return (
    <div className="teachers">

      <h1>👩‍🏫 Teachers</h1>

      <input
        type="text"
        placeholder="Search Teacher..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Experience</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {filteredTeachers.map((teacher) => (

            <tr key={teacher.id}>

              <td>{teacher.id}</td>

              <td>
                {editingId === teacher.id ? (
                  <input
                    value={editedTeacher.name}
                    onChange={(e) =>
                      setEditedTeacher({
                        ...editedTeacher,
                        name: e.target.value,
                      })
                    }
                  />
                ) : (
                  teacher.name
                )}
              </td>

              <td>
                {editingId === teacher.id ? (
                  <input
                    value={editedTeacher.subject}
                    onChange={(e) =>
                      setEditedTeacher({
                        ...editedTeacher,
                        subject: e.target.value,
                      })
                    }
                  />
                ) : (
                  teacher.subject
                )}
              </td>

              <td>
                {editingId === teacher.id ? (
                  <input
                    value={editedTeacher.experience}
                    onChange={(e) =>
                      setEditedTeacher({
                        ...editedTeacher,
                        experience: e.target.value,
                      })
                    }
                  />
                ) : (
                  teacher.experience
                )}
              </td>

              <td>

                {editingId === teacher.id ? (

                  <button
                    className="edit-btn"
                    onClick={handleUpdate}
                  >
                    Update
                  </button>

                ) : (

                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(teacher)}
                  >
                    Edit
                  </button>

                )}

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(teacher.id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Teachers;