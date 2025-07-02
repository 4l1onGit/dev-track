"use client";
import React, { useState } from "react";

type formDataType = {
  skillName: string | null;
  skillLevel: string | null;
  skillDescription: string | null;
  skillTags: string | null;
  startDate: string | null;
  endDate: string | null;
  confidence: string | null;
  progress: string | null;
};

const initialFormData: formDataType = {
  skillName: null,
  skillLevel: null,
  skillDescription: null,
  skillTags: null,
  startDate: null,
  endDate: null,
  confidence: null,
  progress: null,
};

const SkillForm = () => {
  // Handle form submission
  const [formData, setFormData] = useState<formDataType>(initialFormData);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    // Here you can handle the skill data, e.g., send it to an API or update state
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="skillName"
          className="block text-sm font-medium text-gray-700"
        >
          Skill Name
        </label>
        <input
          type="text"
          id="skillName"
          value={formData.skillName || ""}
          onChange={(e) =>
            setFormData({ ...formData, skillName: e.target.value })
          }
          name="skillName"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 bg-gray-700 p-2"
          placeholder="Enter skill name"
          required
        />
      </div>
      <div className="mb-4">
        <div className="flex justify-between space-x-2">
          <div className="">
            <label
              htmlFor="skillLevel"
              className="block text-sm font-medium text-gray-700"
            >
              Skill Level
            </label>
            <select
              id="skillLevel"
              name="skillLevel"
              value={formData.skillLevel || ""}
              onChange={(e) =>
                setFormData({ ...formData, skillLevel: e.target.value })
              }
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 bg-gray-700 p-2"
              required
            >
              <option value="">Select level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <div className="">
            <label
              htmlFor="confidence"
              className="block text-sm font-medium text-gray-700"
            >
              Confidence
            </label>
            <select
              id="confidence"
              name="confidence"
              value={formData.confidence || ""}
              onChange={(e) =>
                setFormData({ ...formData, confidence: e.target.value })
              }
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 bg-gray-700 p-2"
              required
            >
              <option value="">Select level</option>
              <option value="unconfident">Unconfident</option>
              <option value="okay">Getting there</option>
              <option value="confident">Confident</option>
            </select>
          </div>
          <div className="w-[36%]">
            <label
              htmlFor="progress"
              className="block text-sm font-medium text-gray-700"
            >
              Progress
            </label>
            <div className="flex">
              <input
                type="text"
                id="progress"
                name="progress"
                value={formData.progress || ""}
                onChange={(e) =>
                  setFormData({ ...formData, progress: e.target.value })
                }
                className="mt-1 block w-full border-gray-300 rounded-l-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 bg-gray-700 p-2"
                placeholder="Enter progress"
              />
              <span className="bg-gray-600 rounded-r-2xl mt-1 w-10 items-center justify-center flex">
                %
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="skillDescription"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="skillDescription"
          name="skillDescription"
          rows={3}
          value={formData.skillDescription || ""}
          onChange={(e) =>
            setFormData({ ...formData, skillDescription: e.target.value })
          }
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-700 p-2"
          placeholder="Enter skill description"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="skillTags"
          className="block text-sm font-medium text-gray-700"
        >
          Tags
        </label>
        <input
          type="text"
          id="skillTags"
          name="skillTags"
          value={formData.skillTags || ""}
          onChange={(e) =>
            setFormData({ ...formData, skillTags: e.target.value })
          }
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 bg-gray-700 p-2"
          placeholder="Enter tags (comma separated)"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="startDate"
          className="block text-sm font-medium text-gray-700"
        >
          Start Date
        </label>
        <input
          type="datetime-local"
          id="startDate"
          name="startDate"
          value={formData.startDate || ""}
          onChange={(e) =>
            setFormData({ ...formData, startDate: e.target.value })
          }
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 bg-gray-700 p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="endDate"
          className="block text-sm font-medium text-gray-700"
        >
          Estimated End Date
        </label>
        <input
          type="datetime-local"
          id="endDate"
          name="endDate"
          value={formData.endDate || ""}
          onChange={(e) =>
            setFormData({ ...formData, endDate: e.target.value })
          }
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 bg-gray-700 p-2"
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
      >
        Add Skill
      </button>
    </form>
  );
};

export default SkillForm;
