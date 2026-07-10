import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Navigation() {
  return (
    <nav className="navbar">
      <Logo />

      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/students">Students</NavLink>
        </li>

        <li>
          <NavLink to="/teachers">Teachers</NavLink>
        </li>

        <li>
          <NavLink to="/studentdetails">Student Details</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;