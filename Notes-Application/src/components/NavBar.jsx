import { NavLink } from "react-router";
import "./NavBar.css";
export function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/" className="nav-link-button">
        New Note
      </NavLink>
      <NavLink to="/notes" className="nav-link-button">
        Notes
      </NavLink>
    </div>
  );
}
