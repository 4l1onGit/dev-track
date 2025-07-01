import React from "react";
import ProgressBar from "./ProgressBar";

interface SkillsCardProps {
  name: string;
  progress: number;
  confidence: string;
  lastUpdated: string;
}

const SkillsCard = ({
  name,
  progress,
  confidence,
  lastUpdated,
}: SkillsCardProps) => {
  return (
    <li className=" bg-gradient-to-br from-indigo-800 to-indigo-600 rounded-2xl py-4 px-4 flex flex-col space-y-2">
      <div className="flex items-center justify-between">
        <span className="uppercase font-semibold">{name}</span>
        <span className="ml-auto text-xs text-gray-400">{lastUpdated}</span>
      </div>
      <div className="flex flex-col space-y-2">
        <ProgressBar progress={progress} />
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">
            progress {`${progress}%`}
          </span>
          <span className="text-xs text-gray-400">
            Confidence: {confidence}
            {/* <span className="rounded-full h-4 w-4 bg-yellow-400"></span>{" "} */}{" "}
            {/* Placeholder for confidence rating  */}
          </span>
        </div>
      </div>
    </li>
  );
};

export default SkillsCard;
