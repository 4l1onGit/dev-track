import React from 'react';
import ProgressBar from './ProgressBar';

interface SkillsCardProps {
  name: string;
  progress: number;
  confidence: string;
  lastUpdated: Date;
  skillLevel: string;
}

enum SkillLevel {
  ADVANCED = 'Advanced',
  INTERMEDIATE = 'Intermediate',
  BEGINNER = 'Beginner',
}

const SkillsCard = ({
  name,
  progress,
  confidence,
  lastUpdated,
  skillLevel,
}: SkillsCardProps) => {
  return (
    <li className=" bg-gradient-to-br from-indigo-800 to-indigo-600 rounded-2xl py-4 px-4 flex flex-col space-y-2">
      <div className="flex items-center justify-between">
        <span className="uppercase font-semibold">{name}</span>
        <div className="flex space-x-4 justify-evenly items-center">
          <span
            className={`${
              skillLevel === SkillLevel.BEGINNER
                ? 'bg-green-600'
                : skillLevel === SkillLevel.INTERMEDIATE
                  ? 'bg-amber-600'
                  : 'bg-red-600'
            } rounded-xl px-4 text-gray-200 font-bold text-sm w-30 text-center`}
          >
            {skillLevel}
          </span>
          <span className="ml-auto text-xs text-gray-400">
            {String(lastUpdated).split(' ').slice(0, 4).join(' ')}
          </span>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <ProgressBar progress={progress} />
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">
            progress {`${progress}%`}
          </span>
          <span className="text-xs text-gray-400">
            Confidence: {confidence}
            {/* <span className="rounded-full h-4 w-4 bg-yellow-400"></span>{" "} */}{' '}
            {/* Placeholder for confidence rating  */}
          </span>
        </div>
      </div>
    </li>
  );
};

export default SkillsCard;
