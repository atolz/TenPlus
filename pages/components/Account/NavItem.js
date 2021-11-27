import React from "react";

const NavItem = (props) => {
  return (
    <div className="flex items-center p-8 cursor-pointer hover:bg-gray-100">
      {props.type && <i className={`bi ${props.type} mr-6`} style={{ fontSize: "2em", color: "#a8abc1" }}></i>}
      <p className="text-black text-2xl">{props.text}</p>
      {props.link && <i className="bi bi-box-arrow-up-right ml-auto font-bold text-3xl"></i>}
      {props.type && <i className={"bi bi-file-earmark-text-fill ml-auto"} style={{ fontSize: "2em", color: "#a8abc1" }}></i>}
    </div>
  );
};

export default NavItem;
