import React from "react";

interface NotesCardProps {
  title: string;
  lastEdited: string;
  note: string;
}

const NotesCard = ({ title, lastEdited, note }: NotesCardProps) => {
  return (
    <li className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-md space-y-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors ">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-200">{note}...</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Last edited: {lastEdited}
      </p>
    </li>
  );
};

export default NotesCard;
