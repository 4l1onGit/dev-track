import React from "react";
import HomePanel from "./HomePanel";
import NoteSelectbox from "./NoteSelectbox";
import NotesCard from "./NotesCard";
import { getUserNotes } from "../_actions/notesActions";

// const notes = [
//   { id: 1, title: "Note 1", lastEdited: "2023-10-01" },
//   { id: 2, title: "Note 2", lastEdited: "2023-10-02" },
//   { id: 3, title: "Note 3", lastEdited: "2023-10-03" },
//   { id: 4, title: "Note 4", lastEdited: "2023-10-04" },
// ];

const RecentNotesPanel = async () => {
  const notes = await getUserNotes();
  return (
    <HomePanel className="h-2/3 flex flex-col space-y-4 ">
      <div className="flex justify-between">
        <h2 className="text-2xl text-gray-300 px-1">Recently added notes</h2>
        <div className="flex justify-between items-center space-x-2">
          <span>Sort by:</span>
          <NoteSelectbox>{<option>All</option>}</NoteSelectbox>
        </div>
      </div>
      <ul className="flex flex-col space-y-2 overflow-y-auto">
        {notes.map((note, index) => (
          <NotesCard
            key={note.id + String(index)}
            content={note.content}
            createdAt={note.createdAt}
            lastUpdated={note.lastUpdated}
            title={note.title}
            skillId={note.skillId}
            id={note.id}
          />
        ))}
      </ul>
    </HomePanel>
  );
};

export default RecentNotesPanel;
