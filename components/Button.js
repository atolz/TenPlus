import React from "react";

const Button = (props) => {
  return <div className={`border-1 h-14 rounded-2xl border-${props.color}-400 px-5 text-${props.color}-400 flex items-center justify-center cursor-pointer w-full font-semibold`}>{props.text}</div>;
};

export default Button;
