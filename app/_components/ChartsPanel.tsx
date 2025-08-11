import React from 'react';
import HomePanel from './HomePanel';
import LineChart from './LineChart';
import { getUserSkill, getUserSkills } from '../_actions/skillsActions';

const ChartsPanel = async () => {
  const { skills } = await getUserSkills(0, 5, true);
  const chartData = skills.map((skill) => ({
    date: skill.createdAt.toISOString().split(' ').splice(0, 4).join(' '),
    value: skill.progress,
  }));
  return (
    <HomePanel className={`h-1/2`}>
      <h2 className="text-3xl text-gray-300 p-4">X Chart showing Y</h2>
      <div className="flex justify-between items-center p-4">
        <div className="flex space-x-4">
          <button className="bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors">
            Bar Chart
          </button>
          <button className="bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors">
            Line Chart
          </button>
          <button className="bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors">
            Pie Chart
          </button>
        </div>

        <div className="flex space-x-2">
          <select className="bg-gray-700 text-gray-200 px-4 py-2 rounded-lg">
            <option value="last7days">Last 7 Days</option>
            <option value="last14days">Last 14 Days</option>
            <option value="last30days">Last 30 Days</option>
            <option value="last90days">Last 90 Days</option>
            <option value="last6months">Last 6 Months</option>
            <option value="lastyear">Last Year</option>
          </select>
          <select className="bg-gray-700 text-gray-200 px-4 py-2 rounded-lg">
            <option value="all">All</option>
            <option value="completed">Skill</option>
            <option value="inprogress">In Progress</option>
            <option value="notstarted">Not Started</option>
            <option value="failed">Failed</option>
            <option value="passed">Passed</option>
            <option value="notapplicable">Not Applicable</option>
          </select>
        </div>
      </div>
      <div id="chartsContainer" className="h-52 w-full px-2">
        <LineChart data={chartData} />
      </div>
    </HomePanel>
  );
};

export default ChartsPanel;
