import React from "react";

const Card = () => {
  return (
    <div className="d-flex flex-col px-4 py-5 mt-36 border border-gray-400 rounded-3xl">
      <img src="https://www.shawacademy.com/assets/course-cards/mycourse/graphic-design.png" className="rounded-3xl mx-3" />
      <div className="mt-8 px-3">
        <h2 className="text-3xl font-semibold">Graphics Design</h2>
        <p className="text-xl sourcesans mt-4">
          This professional diploma in graphic design offered by Shaw Academy will teach you the foundation of good design. We will learn practical, hands-on skills to make use of the holy trinity of
          design applications: Adobe Illustrator, Photoshop and InDesign. With practical challenges to take home after most lessons, you will have the ability to test your knowledge and skills learnt
          in the lessons. The course is sixteen weeks long, with two lessons presented each week, giving you time throughout the week to work on your assignments and challenges.
        </p>
        <div className="d-flex justify-between mt-5 items-center">
          <p className="text-2xl font-bold ">Starter Pack</p>
          <button className="rounded-full px-4 bg-gray-900 text-xl h-14 font-semibold text-white md:text-blue-900">Download for free</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
