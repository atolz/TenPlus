import { createContext, useState } from "react";

export const ResourceContext = createContext({});

const ResourceContextProvider = (props) => {
  const [activeCard, setActive] = useState("starter");

  function setVal(item) {
    console.log("changing active item", activeCard);
    setActive(item);
  }

  return <ResourceContext.Provider value={{ activeCard: activeCard, setVal }}>{props.children}</ResourceContext.Provider>;
};

export default ResourceContextProvider;
