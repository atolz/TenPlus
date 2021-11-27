import React from "react";

const Assignment = () => {
  return (
    <div className="p-4 border flex items-center rounded-3xl">
      <i className="bi bi-pencil-fill font-bold mr-5 text-gray-400 bg-gray-200 rounded-2xl text-2xl p-2"></i>
      <p className="text-2xl">Test Your Knowledge</p>
      <button className="bg-red-50 text-xl text-red-400 rounded-full h-10 font-semibold flex px-4 items-center justify-center cursor-pointer ml-auto">Start now</button>
    </div>
  );
};

export default Assignment;
