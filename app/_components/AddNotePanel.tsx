import React from "react";
import NoteSelectbox from "./NoteSelectbox";
import HomePanel from "./HomePanel";

const AddNotePanel = () => {
  return (
    <HomePanel className="h-1/3 flex flex-col space-y-4 ">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-gray-300 px-1">Add new note</h2>
        <NoteSelectbox />
      </div>
      <textarea
        className="w-full h-36 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Write your note here..."
      ></textarea>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition w-full">
        Save Note
      </button>
    </HomePanel>
  );
};

export default AddNotePanel;
