import React from "react";

const EndOfModAss = () => {
  return (
    <div className="bg-gray-900 rounded-3xl p-10">
      <h2 className="text-white text-3xl font-semibold mb-3">
        End of Module Assignment <i className="bi bi-trophy-fill font-bold mr-5 text-gray-400 rounded-2xl text-2xl p-2"></i>
      </h2>
      <div className="flex items-center justify-between mb-3">
        <i className="bi bi-pencil-fill font-bold mr-5 text-gray-400  rounded-2xl text-2xl p-2"></i>
        <i className="bi bi-chevron-right font-bold mr-5 text-white cursor-pointer  rounded-2xl text-3xl p-2"></i>
      </div>
      <p className="text-white font-semibold text-xl">Note: After completing the assignment, please visit this section after 15 mins to view your score.</p>
    </div>
  );
};

export default EndOfModAss;
