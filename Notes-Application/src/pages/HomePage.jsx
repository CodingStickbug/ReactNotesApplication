import { AppBar } from "../components/AppBar";
import { NavBar } from "../components/NavBar";
import { useState } from "react";
import "./HomePage.css";

export function HomePage({ setNotes, notes }) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  function CreateNote() {
    if (title != "" && note != "") {
      setNotes([
        ...notes,
        {
          key: crypto.randomUUID(),
          title: title,
          note: note,
          // created_at: dayjs(dayjs().valueOf()).format("HH:mm"),
        },
      ]);
      setTitle("");
      setNote("");
    }
  }

  function SaveTitle(event) {
    setTitle(event.target.value);
  }
  function SaveNote(event) {
    setNote(event.target.value);
  }

  return (
    <>
      <title>New Note</title>
      <AppBar />
      <div className="main-content">
        <input
          value={title}
          className="name-input"
          placeholder="Title"
          onChange={SaveTitle}
        ></input>
        <textarea
          value={note}
          onChange={SaveNote}
          className="notes-input"
          placeholder="Note: Just write anyting..."
        ></textarea>
        <div className="button-section">
          <button className="clear-button">Clear</button>
          <button className="submission-button" onClick={CreateNote}>
            Create
          </button>
        </div>
      </div>
      <NavBar />
    </>
  );
}
