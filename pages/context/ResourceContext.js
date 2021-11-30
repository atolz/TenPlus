import { createContext, useState } from "react";

export const ResourceContext = createContext({});

const ResourceContextProvider = (props) => {
  const [activeCard, setActive] = useState("starter");
  const [selectedMod, setMod] = useState(" ");

  function setVal(item) {
    console.log("changing active item", activeCard);
    setActive(item);
  }

  function setModule(module) {
    console.log("changing selected mod", module);
    setMod(module);
  }

  return <ResourceContext.Provider value={{ activeCard: activeCard, setVal, setModule, selectedMod }}>{props.children}</ResourceContext.Provider>;
};

export default ResourceContextProvider;
