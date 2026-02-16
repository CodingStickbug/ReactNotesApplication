import { AppBar } from "../components/AppBar";
import { NavBar } from "../components/NavBar";
import { Link } from "react-router";
import "./NotesPage.css";
export function NotesPage({ notes, setNotes, setSelectedNote }) {
  function ClearNotes() {
    setNotes([]);
  }
  return (
    <>
      <title>Notes</title>
      <AppBar />
      <div className="main-content">
        <button onClick={ClearNotes}>Clear</button>
        {notes.map((note) => {
          console.log(note);
          return (
            <Link
              to="/note"
              onClick={() => {
                setSelectedNote(note.note);
              }}
            >
              <div className="note-tile">{note.title}</div>
            </Link>
          );
        })}
      </div>
      <NavBar />
    </>
  );
}
