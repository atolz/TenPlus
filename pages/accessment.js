import React from "react";
import Module from "../components/Accessment/Module";
import LayoutCourses from "../components/LayoutCourses";

const accessment = () => {
  return (
    <div className="flex justify-between">
      <div className="max-w-3xl w-full">
        <Module></Module>
        <Module></Module>
        <Module></Module>
      </div>
      <div className="max-w-2xl w-full ml-8">
        <div className="flex flex-col bg-gray-900 rounded-3xl p-5">
          <p className="text-white text-2xl mb-4">Unlock your diploma</p>
          <div className="flex justify-between mb-20">
            <span className="text-white text-xl">Collect 4 Badges</span>
            <span className="text-white text-xl">4/4</span>
          </div>
          <div className="d-flex justify-between">
            <div className="flex flex-col items-center">
              <img className="mb-3" src="https://www.shawacademy.com/dashboard-new/assessments/badge-placeholder.svg"></img>
              <p className="text-white font-medium text-xl">Module 1</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="mb-3" src="https://www.shawacademy.com/dashboard-new/assessments/badge-placeholder.svg"></img>
              <p className="text-white font-medium text-xl">Module 1</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="mb-3" src="https://www.shawacademy.com/dashboard-new/assessments/badge-placeholder.svg"></img>
              <p className="text-white font-medium text-xl">Module 1</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="mb-3" src="https://www.shawacademy.com/dashboard-new/assessments/badge-placeholder.svg"></img>
              <p className="text-white font-medium text-xl">Module 1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default accessment;

accessment.Layout = LayoutCourses;
