import React from "react";
import HomePanel from "./HomePanel";
import Image from "next/image";
import { auth } from "../_lib/auth/auth";

const UserProfilePanel = async () => {
  const session = await auth();
  return (
    <HomePanel className={`h-1/2 flex flex-col justify-center space-y-4`}>
      <h2 className="text-3xl text-gray-300 pt-4 px-4">Hey Bob, Welcome</h2>
      <div className="flex justify-between w-full">
        <div className="w-2/3 p-4 rounded-lg">
          <div className="flex justify-between">
            <h3 className="text-2xl text-gray-200 ">Update Profile</h3>
            <div className="relative h-10 w-10">
              <Image
                alt="User Avatar"
                src={session!.user!.image!}
                fill
                className="w-1/3 absolute rounded-lg shadow-md"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <form className="mt-4 space-y-4">
            <div className="mb-4">
              <label className="block text-gray-200 mb-2" htmlFor="name">
                Display Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 bg-gray-700 text-gray-200 rounded-xl"
                placeholder="Enter your display name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-200 mb-2" htmlFor="email">
                Short Bio
              </label>
              <textarea
                id="bio"
                className="w-full p-2 bg-gray-700 text-gray-200 rounded-xl"
                placeholder="Tell us about yourself"
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors"
            >
              Update Profile
            </button>
          </form>
        </div>
        <div className="w-1/3 p-4 bg-gray-800 rounded-lg">
          <h3 className="text-2xl text-gray-200 mb-4">Profile Stats</h3>
          <ul className="space-y-2">
            <li className="flex justify-between text-gray-300">
              <span>Total Notes</span>
              <span>42</span>
            </li>
            <li className="flex justify-between text-gray-300">
              <span>Total Skills</span>
              <span>15</span>
            </li>
            <li className="flex justify-between text-gray-300">
              <span>Last Active</span>
              <span>2 days ago</span>
            </li>
            <li className="flex justify-between text-gray-300">
              <span>Current Streak</span>
              <span className="text-green-400">5 days</span>
            </li>
          </ul>
          <div className="py-4">
            <h3 className="text-2xl text-gray-200 mb-4">Theme Settings</h3>
            <div className="flex items-center space-x-2 mt-2">
              <button className="bg-gray-700 text-gray-200 px-3 py-1 rounded hover:bg-gray-600 transition-colors">
                Light
              </button>
              <button className="bg-gray-700 text-gray-200 px-3 py-1 rounded hover:bg-gray-600 transition-colors">
                Dark
              </button>
              <button className="bg-gray-700 text-gray-200 px-3 py-1 rounded hover:bg-gray-600 transition-colors">
                System
              </button>
            </div>
          </div>
        </div>
      </div>
    </HomePanel>
  );
};

export default UserProfilePanel;
