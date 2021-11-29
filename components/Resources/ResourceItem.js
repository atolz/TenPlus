import React from "react";

const ResourceItem = (props) => {
  const iconStyle = {
    display: "inline-block",
    width: "1em",
    height: "1em",
    "stroke-width": 0,
    stroke: "red",
    fill: "red",
  };
  return (
    <div
      onClick={() => {
        props.fn();
      }}
      className={
        props.active == props.number
          ? "flex border-1 shadow-sm rounded-3xl h-32 px-7 items-center w-full mb-4 cursor-pointer tes"
          : "flex h-32 px-7 items-center w-full mb-4 cursor-pointer border-1 border-transparent"
      }
    >
      {props.type == "starter" ? (
        <>
          <div className="h-16 w-16 p-3 bg-yellow-100 rounded-3xl mr-12">
            <svg id="icon-rocket" viewBox="0 0 32 32" style={{ display: "inline-block", stroke: "#eb5b77", strokeWidth: "2px", fill: "#eb5b77" }}>
              <path d="M22 2l-10 10h-6l-6 8c0 0 6.357-1.77 10.065-0.94l-10.065 12.94 13.184-10.255c1.839 4.208-1.184 10.255-1.184 10.255l8-6v-6l10-10 2-10-10 2z"></path>
            </svg>
          </div>
          <div className="flex items-center justify-between">
            <p className={props.active == props.number ? "text-3xl font-semibold text-gray-900 " : " text-3xl font-medium text-gray-900"}>Starter Pack</p>
          </div>
          <button className="h-14 px-4 rounded-3xl bg-gray-900 text-white ml-auto font-semibold text-xl">Free</button>
        </>
      ) : (
        <>
          <i className={"bi bi-lock-fill cursor-pointer p-3 px-4 mr-12 bg-gray-200 rounded-3xl"} style={{ fontSize: "1.5em", color: "#a8abc1" }}></i>
          <div className="flex flex-col">
            <p className={props.active == props.number ?"text-red-400 text-xl sourcesans":"text-gray-500 text-xl sourcesans"}>MODULE {props.number}</p>
            <h2 className={props.active == props.number ? "font-medium text-4xl" : " text-4xl font-light"}>Course Materials</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default ResourceItem;
