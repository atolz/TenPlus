import React, { useContext, useEffect } from "react";
import LayoutCourses from "./components/LayoutCourses";
import Nav from "./components/Resources/Nav";
import Card from "./components/Resources/Card";
import CardBuy from "./components/Resources/CardBuy";
import ResourceContextProvider, { ResourceContext } from "./context/ResourceContext";

const ResourceComponent = () => {
  const { activeCard } = useContext(ResourceContext);
  useEffect(() => {
    console.log("in resource", activeCard);
  }, [activeCard]);
  return (
    <main className="flex w-full gap-4">
      <div className="flex w-5/12 mt-3 flex-shrink-0">
        <Nav></Nav>
      </div>
      <div className="flex-1">{activeCard === "starter" ? <Card></Card> : <CardBuy></CardBuy>}</div>
    </main>
  );
};

const resources = () => {
  return (
    <ResourceContextProvider>
      <ResourceComponent></ResourceComponent>
    </ResourceContextProvider>
  );
};

resources.Layout = LayoutCourses;
export default resources;
