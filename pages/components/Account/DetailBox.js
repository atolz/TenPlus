import React from "react";

const DetailBox = (props) => {
  return (
    <div className="w-60 mb-16">
      <h3 className="text-xl text-gray-700 font-semibold mb-3">{props.title}</h3>
      {props.values?.map((e, i) => {
        return (
          <p className="text-2xl text-gray-500" key={i}>
            {e}
          </p>
        );
      })}
    </div>
  );
};

export default DetailBox;
