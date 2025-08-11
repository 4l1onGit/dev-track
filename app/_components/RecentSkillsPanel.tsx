import React from 'react';
import HomePanel from './HomePanel';
import SkillsCard from './SkillsCard';
import Link from 'next/link';
import { getUserSkills } from '../_actions/skillsActions';
import { NextRequest } from 'next/server';
import { SearchParams } from 'next/dist/server/request/search-params';
import Pagination from './Pagination';
import SkillsList from './SkillsList';

// const fakeSkills = [
//   {
//     name: "JavaScript",
//     progress: 90,
//     confidence: "High",
//     lastUpdated: "3 months ago",
//     skillLevel: "Advanced",
//   },
//   {
//     name: "React",
//     progress: 20,
//     confidence: "Medium",
//     lastUpdated: "2 months ago",
//     skillLevel: "Beginner",
//   },
//   {
//     name: "Node.js",
//     progress: 70,
//     confidence: "Medium",
//     lastUpdated: "1 month ago",
//     skillLevel: "Intermediate",
//   },
//   {
//     name: "Python",
//     progress: 50,
//     confidence: "High",
//     lastUpdated: "2 weeks ago",
//     skillLevel: "Intermediate",
//   },
//   {
//     name: "CSS",
//     progress: 80,
//     confidence: "High",
//     lastUpdated: "1 week ago",
//     skillLevel: "Advanced",
//   },
// ];

const RecentSkillsPanel = async ({
  page,
  record,
}: {
  page: number;
  record: number;
}) => {
  const { skills, total } = await getUserSkills(page, record);

  return (
    <HomePanel className={`flex flex-col h-full`}>
      <div className="flex justify-between items-center px-1">
        <h2 className="text-4xl px-1 py-14">Recently added skills</h2>
        <div className="flex justify-between space-x-2">
          <span className="rounded-2xl bg-gray-700 h-10 w-20 flex items-center justify-center text-gray-300 font-semibold">
            {total}
          </span>
          <Link
            href="/skills/new"
            className="bg-indigo-700 text-gray-300 px-4 py-2 rounded-2xl hover:bg-indigo-600 transition-colors font-extrabold"
          >
            +
          </Link>
        </div>
      </div>
      <div id="skillsContainer" className="flex-1 overflow-y-auto px-4">
        <SkillsList skills={skills} />
      </div>
      <Pagination
        pageParam={page || 0}
        total={total}
        record={record}
        query="page"
      />
    </HomePanel>
  );
};

export default RecentSkillsPanel;
