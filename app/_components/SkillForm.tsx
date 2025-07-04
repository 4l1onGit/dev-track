"use client";
import { Category, Confidence, Skill, SkillLevel } from "@prisma/client";
import React, { useState } from "react";
import { addUserSkill } from "../_actions/skillsActions";

const initialFormData: Skill = {
  name: "",
  skillLevel: SkillLevel.Beginner,
  description: "",
  tags: [],
  createdAt: new Date(),
  lastUpdated: new Date(),
  confidence: Confidence.Low,
  progress: 0,
  category: Category.Other,
};

const SkillForm = () => {
  // Handle form submission
  const [formData, setFormData] = useState<Skill>(initialFormData);
  const [tag, setTag] = useState("");

  const handleTagsChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === ",") && tag.trim()) {
      e.preventDefault();
      if (!formData.tags.includes(tag.trim())) {
        setFormData({
          ...formData,
          tags: [...(formData.tags || []), tag.trim()],
        });
      }
      setTag("");
    }
    if (e.key === "Backspace" && !tag && formData.tags.length > 0) {
      setFormData({
        ...formData,
        tags: formData.tags?.slice(0, -1) || [],
      });
    }
  };

  return (
    <form action={addUserSkill}>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Skill Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name || ""}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          name="name"
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
              value={formData.skillLevel || SkillLevel.Beginner}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  skillLevel: e.target.value as SkillLevel,
                })
              }
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 bg-gray-700 p-2"
              required
            >
              <option>Select level</option>
              <option value={SkillLevel.Beginner}>{SkillLevel.Beginner}</option>
              <option value={SkillLevel.Intermediate}>
                {SkillLevel.Intermediate}
              </option>
              <option value={SkillLevel.Advanced}>{SkillLevel.Advanced}</option>
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
              value={formData.confidence || Confidence.Low}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  confidence: e.target.value as Confidence,
                })
              }
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 bg-gray-700 p-2"
              required
            >
              <option>Select level</option>
              <option value={Confidence.Low}>{Confidence.Low}</option>
              <option value={Confidence.Medium}>{Confidence.Medium}</option>
              <option value={Confidence.High}>{Confidence.High}</option>
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
                type="number"
                id="progress"
                name="progress"
                min={0}
                max={100}
                value={Number(formData.progress)}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    progress: e.target.valueAsNumber!,
                  })
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
          value={formData.description || ""}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
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
          <div className="flex space-x-2 items-center py-2">
            <span>Tags</span>
            <div className="flex space-x-2">
              {formData.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-400 px-2 rounded-xl text-gray-800"
                >
                  {tag} <span className="text-gray-950">x</span>
                </span>
              ))}
            </div>
          </div>
        </label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={tag || ""}
          onKeyDown={(e) => handleTagsChange(e)}
          onChange={(e) => setTag(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 bg-gray-700 p-2"
          placeholder="Enter tags (comma separated)"
        />
      </div>
      <div className="pb-4">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category
        </label>
        <select
          id="category"
          name="category"
          value={formData.category || Category.Other}
          onChange={(e) =>
            setFormData({
              ...formData,
              category: e.target.value as Category,
            })
          }
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 bg-gray-700 p-2"
          required
        >
          <option>Select level</option>
          <option value={Category.Backend}>{Category.Backend}</option>
          <option value={Category.Frontend}>{Category.Frontend}</option>
          <option value={Category.DevOps}>{Category.DevOps}</option>
          <option value={Category.Mobile}>{Category.Mobile}</option>
          <option value={Category.SoftSkill}>{Category.SoftSkill}</option>
          <option value={Category.Tooling}>{Category.Tooling}</option>
          <option value={Category.Other}>{Category.Other}</option>
        </select>
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
