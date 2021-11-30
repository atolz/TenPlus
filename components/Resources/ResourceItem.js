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
        props.active == props.number && props.activeCard != "starter"
          ? "flex border-1 shadow-sm rounded-3xl h-32 px-7 items-center w-full mb-4 cursor-pointer tes"
          : "flex h-32 px-7 items-center w-full mb-4 cursor-pointer border-1 border-transparent"
      }
    >
      <i className={"bi bi-lock-fill cursor-pointer p-3 px-4 mr-12 bg-gray-200 rounded-3xl"} style={{ fontSize: "1.5em", color: "#a8abc1" }}></i>
      <div className="flex flex-col">
        <p className={props.active == props.number && props.activeCard != "starter"? "text-red-400 text-xl sourcesans" : "text-gray-500 text-xl sourcesans"}>MODULE {props.number}</p>
        <h2 className={props.active == props.number && props.activeCard != "starter" ? "font-medium text-4xl" : " text-4xl font-light"}>Course Materials</h2>
      </div>
    </div>
  );
};

export default ResourceItem;
