import React from "react";
import AccountNav from "../components/Account/AccountNav";
import AccountContent from "../components/Account/AccountContent";

const account = () => {
  return (
    <div className="flex">
      <AccountNav></AccountNav>
      <AccountContent></AccountContent>
    </div>
  );
};

export default account;
