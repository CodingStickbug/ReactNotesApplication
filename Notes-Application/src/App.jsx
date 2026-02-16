import { Route, Routes } from "react-router";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { NotesPage } from "./pages/NotesPage";
import { useEffect, useState } from "react";
import { NotePage } from "./pages/NotePage";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || [],
  );
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    console.log("Use Effect Called");
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <Routes>
        <Route index element={<HomePage setNotes={setNotes} notes={notes} />} />
        <Route
          path="/notes"
          element={
            <NotesPage
              setNotes={setNotes}
              notes={notes}
              setSelectedNote={setSelectedNote}
            />
          }
        />
        <Route path="/note" element={<NotePage selectedNote={selectedNote} />} />
      </Routes>
    </>
  );
}

export default App;
