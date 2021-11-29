import React from "react";

const Assignment = () => {
  return (
    <div className={"flex items-center border border-gray-400 rounded-3xl px-4 py-4 mb-4"}>
      <i className={"bi bi-file-earmark-text-fill mr-6"} style={{ fontSize: "2em", color: "#a8abc1" }}></i>
      <h2 className={"mr-auto flex-1 cursor-pointer h3"}>Assignment 1</h2>
      <button className="bg-red-50 text-xl text-red-400 rounded-full h-10 font-semibold flex px-4 items-center justify-center cursor-pointer">Start now</button>
    </div>
  );
};

export default Assignment;
