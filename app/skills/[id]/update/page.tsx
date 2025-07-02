import SkillForm from "@/app/_components/SkillForm";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-gray-800 border-indigo-800 border p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Update Skill</h2>
        <SkillForm />
      </div>
    </div>
  );
};

export default page;
