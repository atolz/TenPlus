import React from "react";
import DetailBox from "./DetailBox";

const AccountContent = () => {
  const info = [
    { title: "age", values: ["22-30"] },
    { title: "Goals", values: ["Professional", "Improvement"] },
    { title: "Degree", values: ["Graduate"] },
    { title: "Degree", values: ["Graduate"] },
    { title: "Degree", values: ["Graduate"] },
    { title: "Membership Status", values: ["Cancelled"] },
  ];
  return (
    <div className="flex-1 ml-40">
      <header className="flex items-center">
        <div className="mr-10 w-24 h-24">
          <img
            className=" border-3 rounded-2xl"
            src="data:image/png;base64,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"
          ></img>
        </div>
        <div>
          <p className="h2">John Doe</p>
          <div className="flex items-center">
            <i className="bi bi-patch-check font-bold text-2xl mr-5 text-gray-300"></i>
            <p className="text-2xl text-gray-400 ">Verified student</p>
          </div>
        </div>
        <button className="h-14 px-4 ml-auto rounded-full bg-gray-200 text-gray-900 font-semibold text-xl">Edit</button>
      </header>

      <main>
        <h2 className="h3 mt-16 mb-7">Personal Info</h2>
        <div className="flex gap-4 flex-wrap">
          {info.map((e, i) => {
            return <DetailBox {...e} key={i}></DetailBox>;
          })}
        </div>
      </main>
    </div>
  );
};

export default AccountContent;
