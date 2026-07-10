function Home() {
  return (
    <div className="home">

      <h1>🎓 Student Management System</h1>
      <h2>Welcome to Student Management System</h2>

      <p>
        Manage students, teachers, and contact information easily using this
        React Single Page Application.
      </p>

      <div className="cards">

        <div className="card">
          <h3>Total Students</h3>
          <p>120</p>
        </div>

        <div className="card">
          <h3>Total Teachers</h3>
          <p>25</p>
        </div>

        <div className="card">
          <h3>Departments</h3>
          <p>5</p>
        </div>

      </div>

      <div className="news">
        <h2>Latest News</h2>

        <ul>
          <li>📌 Semester Exams start from August 15.</li>
          <li>📌 Placement Training begins next week.</li>
          <li>📌 Student Registration is open.</li>
        </ul>
      </div>

    </div>
  );
}

export default Home;