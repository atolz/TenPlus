import React, { useState } from "react";
import Assignment from "./Assignment";

const Module = () => {
  const [showAss, setShowAss] = useState(false);

  return (
    <div className=" mb-5">
      <div className="flex items-center bg-gray-50 rounded-2xl p-7 pr-10 mb-4">
        <div className="bg-white rounded-2xl h-28 w-28 flex items-center justify-center mr-7">
          <img src="https://www.shawacademy.com/dashboard-new/assessments/badge-placeholder.svg"></img>
        </div>
        <div>
          <h2 className="h3">Module 1</h2>
          <p className="">Complete the final assignment to get module completion certificate</p>
        </div>
        <i
          onClick={() => {
            setShowAss(!showAss);
          }}
          className={"bi bi-chevron-down mr-3  text-gray-900 font-black cursor-pointer text-2xl"}
          style={{}}
        ></i>
      </div>
      <div className=" ">
        {showAss ? (
          <>
            <Assignment></Assignment>
            <Assignment></Assignment>
            <Assignment></Assignment>
            <Assignment></Assignment>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Module;
