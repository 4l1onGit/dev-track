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
      <h2 className="text-4xl px-1 py-14">Recently added skills</h2>
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
    </HomePanel>
  );
};

export default RecentSkillsPanel;
