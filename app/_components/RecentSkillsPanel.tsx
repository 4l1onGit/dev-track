import React from "react";
import HomePanel from "./HomePanel";
import SkillsCard from "./SkillsCard";

const fakeSkills = [
  {
    name: "JavaScript",
    progress: 90,
    confidence: "High",
    lastUpdated: "3 months ago",
  },
  {
    name: "React",
    progress: 20,
    confidence: "Medium",
    lastUpdated: "2 months ago",
  },
  {
    name: "Node.js",
    progress: 70,
    confidence: "Medium",
    lastUpdated: "1 month ago",
  },
  {
    name: "Python",
    progress: 50,
    confidence: "High",
    lastUpdated: "2 weeks ago",
  },
  {
    name: "CSS",
    progress: 80,
    confidence: "High",
    lastUpdated: "1 week ago",
  },
];

const RecentSkillsPanel = () => {
  return (
    <HomePanel className={`h-full`}>
      <div className="flex justify-between items-center px-1">
        <h2 className="text-4xl px-1 py-14">Recently added skills</h2>
        <div className="flex justify-between space-x-2">
          <span className="rounded-2xl bg-gray-700 h-10 w-20 flex items-center justify-center text-gray-300 font-semibold">
            23
          </span>
          <button className="bg-indigo-700 text-gray-300 px-4 py-2 rounded-2xl hover:bg-indigo-600 transition-colors font-extrabold">
            +
          </button>
        </div>
      </div>
      <div id="skillsContainer" className="">
        <ul className="flex flex-col space-y-6">
          {fakeSkills.map((skill, index) => (
            <SkillsCard
              key={String(index) + skill.name}
              confidence={skill.confidence}
              lastUpdated={skill.lastUpdated}
              name={skill.name}
              progress={skill.progress}
            />
          ))}
        </ul>
      </div>
      <div id="pagination" className="py-2">
        <div className="flex justify-center items-center space-x-2 py-4">
          <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
            Previous
          </button>
          <span className="text-gray-300">Page 1 of 10</span>
          <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
            Next
          </button>
        </div>
      </div>
    </HomePanel>
  );
};

export default RecentSkillsPanel;
