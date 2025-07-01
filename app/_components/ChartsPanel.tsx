import React from "react";
import HomePanel from "./HomePanel";

const ChartsPanel = () => {
  return (
    <HomePanel className={`h-2/3`}>
      <h2 className="text-3xl text-gray-300">X Chart showing Y</h2>
      <div id="chartsContainer" className=""></div>
    </HomePanel>
  );
};

export default ChartsPanel;
