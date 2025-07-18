"use client";
import React from "react";
import { deleteUserNote } from "../_actions/notesActions";

const DeleteNoteButton = ({ id }: { id: string }) => {
  const action = deleteUserNote.bind(null, id);
  return (
    <form action={action}>
      <button type="submit">X</button>
    </form>
  );
};

export default DeleteNoteButton;
