import React from "react";
import HomePanel from "./HomePanel";

const UserProfilePanel = () => {
  return (
    <HomePanel className={`h-1/3`}>
      <h2 className="text-3xl text-gray-300">Hey Bob, Welcome</h2>
    </HomePanel>
  );
};

export default UserProfilePanel;
