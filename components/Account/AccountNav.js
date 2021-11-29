import React from "react";
import NavItem from "./NavItem";

const AccountNav = () => {
  return (
    <div className="max-w-lg w-full border border-gray-800 rounded-3xl overflow-hidden pb-14">
      <NavItem type="bi-trophy-fill" text="Student Profile"></NavItem>
      <NavItem type="bi-gear-fill" text="Settings"></NavItem>
      <NavItem type="bi-currency-exchange" text="Subscription and Purchases"></NavItem>
      <NavItem type="bi-briefcase-fill" text="Carrer"></NavItem>
      <NavItem text="Help Center" link=" "></NavItem>
      <NavItem text="Faculty Blog" link=" "></NavItem>
      <NavItem text="Terms of Use" link=" "></NavItem>
      <NavItem text="Privacy Policy" link=" "></NavItem>
      <NavItem text="Feed Back" link=" "></NavItem>
    </div>
  );
};

export default AccountNav;
