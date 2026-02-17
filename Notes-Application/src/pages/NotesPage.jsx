import { AppBar } from "../components/AppBar";
import { NavBar } from "../components/NavBar";
import { Link } from "react-router";
import "./NotesPage.css";
export function NotesPage({ notes, setNotes, setSelectedNote }) {
  function DeleteNote(key) {
    const newNotes = notes.filter((item) => item.key !== key);
    setNotes(newNotes);
  }
  return (
    <>
      <title>Notes</title>
      <AppBar />
      <div className="main-content">
        <button
          onClick={() => {
            setNotes([]);
          }}
          className="button"
        >
          Clear
        </button>
        {notes.map((note) => {
          return (
            <div  className="note-tile">
              <Link
                to="/note"
                onClick={() => {
                  setSelectedNote(note.note);
                }}
              >
                <div>{note.title}</div>
              </Link>
              <button
                className="delete-button"
                onClick={() => {
                  DeleteNote(note.key);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <NavBar />
    </>
  );
}
