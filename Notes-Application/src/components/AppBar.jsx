import { Link } from "react-router";
import "./AppBar.css";
export function AppBar({ previousPageRoute }) {
  return (
    <div className="appbar">
      {previousPageRoute != null ? (
        <Link to={previousPageRoute} className="back-button">
          Back
        </Link>
      ) : null}
      <h1>Notes App</h1>
    </div>
  );
}
