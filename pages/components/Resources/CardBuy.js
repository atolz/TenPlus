import React from "react";

const CardBuy = () => {
  return (
    <div className="d-flex flex-col px-4 py-5 mt-1 border border-gray-400 rounded-3xl">

      <div className="rounded-3xl mx-3 py-10 px-7 flex bg-gray-900 justify-between">
        <div className="flex flex-col items-start">
          <p className="text-white font-semibold mb-3 text-xl">Unlock All Course Materials</p>
          <p className="text-gray-200 mb-3">
            Unlock your lessons <br /> notes, Slides & more!
          </p>
          <div className="text-white px-4 h-14 bg-red-400 rounded-full flex justify-center items-center text-xl">Buy Now</div>
        </div>
        <div className="text-6xl text-red-300 font-bold whitespace-nowrap self-end mt-2">NGN 3899.99</div>
      </div>

      <div className="mt-8 border border-gray-600 rounded-3xl mx-3 bg-gray-100 py-12 px-14">
        <div className="flex items-center mb-14">
          <i className={"bi bi-pencil cursor-pointer p-3 px-4 mr-8 text-green-200 bg-green-50 rounded-3xl"} style={{ fontSize: "2em" }}></i>
          <p className="mr-auto text-gray-900 font-semibold text-2xl">Lesson Resources</p>
          <i className={"bi bi-plus cursor-pointer text-red-400 font-bold"} style={{ fontSize: "2.1em"}}></i>
        </div>
        <div className="flex flex-col">
          <SingleResource text="Lesson 1 Slides"></SingleResource>
          <SingleResource text="Lesson 1 Notes"></SingleResource>
          <SingleResource text="Lesson 2 Slides"></SingleResource>
          <SingleResource text="Lesson 3 Notes"></SingleResource>
        </div>
      </div>
    </div>
  );
};

const SingleResource = (props) => {
  return (
    <div className="d-flex items-center mb-14">
      <p className="mr-auto text-xl text-black">{props.text}</p>
      <i className={"bi bi-lock-fill cursor-pointer text-gray-900 font-bold"} style={{ fontSize: "1.5em", color: "#a8abc1" }}></i>
    </div>
  );
};

export default CardBuy;
