import React, { ReactNode } from "react";

interface NoteSelectboxProps {
  children?: ReactNode | null;
}

const NoteSelectbox = ({ children }: NoteSelectboxProps) => {
  return (
    <select className="bg-gray-700 px-2 h-8  rounded-2xl" name="" id="">
      {children}
      <option value="skill">Skill</option>
      <option value="project">Project</option>
      <option value="general">General</option>
      <option value="idea">Idea</option>
      <option value="todo">To-Do</option>
    </select>
  );
};

export default NoteSelectbox;
