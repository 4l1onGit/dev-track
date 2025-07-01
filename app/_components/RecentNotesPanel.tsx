import React from "react";
import HomePanel from "./HomePanel";
import NoteSelectbox from "./NoteSelectbox";

const RecentNotesPanel = () => {
  return (
    <HomePanel className="h-2/3 flex flex-col space-y-4 ">
      <div className="flex justify-between">
        <h2 className="text-2xl text-gray-300 px-1">Recently added notes</h2>
        <div className="flex justify-between items-center space-x-2">
          <span>Sort by:</span>
          <NoteSelectbox>{<option>All</option>}</NoteSelectbox>
        </div>
      </div>
    </HomePanel>
  );
};

export default RecentNotesPanel;
