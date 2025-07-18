'use client';
import { Skill } from '@prisma/client';
import { useState } from 'react';
import { createUserNote } from '../_actions/notesActions';

const initialState = {
  title: '',
  content: '',
  skill: '',
};

const NoteForm = ({ skills }: { skills: Skill[] }) => {
  const [formData, setFormData] = useState(initialState);
  return (
    <form action={createUserNote} className="">
      <div className="flex justify-between items-center py-2">
        <h2 className="text-2xl text-gray-300 px-1">Add new note</h2>
      </div>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Note Title
        </label>
        <input
          type="text"
          id="title"
          value={formData.title || ''}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          name="title"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 bg-gray-700 p-2"
          placeholder="Enter skill name"
          required
        />
      </div>
      <div className="pb-4 space-x-4">
        <label
          className="block text-sm font-medium p-1 text-gray-700"
          htmlFor="skill"
        >
          Select Skill
        </label>
        <select
          onChange={(e) => setFormData({ ...formData, skill: e.target.value })}
          className="bg-gray-700 px-2 h-8  rounded-2xl text-sm"
          name="skill"
          id="skill"
        >
          {skills.map((skill) => (
            <option className="text-sm" key={skill.id} value={skill.id}>
              {skill.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col space-y-2">
        <textarea
          id="content"
          name="content"
          className="w-full h-36 p-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 px-2 rounded-xl"
          placeholder="Write your note here..."
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
          maxLength={200}
        />
        <span className="text-xs text-gray-400 text-end py-2">
          word count 0/200
        </span>
      </div>

      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition w-full"
      >
        Save Note
      </button>
    </form>
  );
};

export default NoteForm;
