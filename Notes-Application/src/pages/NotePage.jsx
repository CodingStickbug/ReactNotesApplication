import { AppBar } from "../components/AppBar";
import { NavBar } from "../components/NavBar";
import "./NotePage.css";
export function NotePage({ selectedNote }) {
  return (
    <>
      <title>Note</title>
      <AppBar previousPageRoute="/notes"/>
      <div className="main-content">
        <p className="note">{selectedNote}</p>
      </div>
      <NavBar />
    </>
  );
}
