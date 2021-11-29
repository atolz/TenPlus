import { useState, useContext, useEffect } from "react";
import { ResourceContext } from "../../pages/context/ResourceContext";
import ResourceItem from "./ResourceItem";

const Nav = () => {
  const resources = [{ type: "starter" }, { type: "unlock", purchased: false }, { type: "unlock", purchased: false }];
  const [active, setActive] = useState(0);
  const { setVal, activeCard } = useContext(ResourceContext);
  useEffect(() => {
    console.log("in nav...", activeCard, resources);
  }, [activeCard]);
  return (
    <nav className="flex flex-col flex-1">
      {resources.map((resource, i) => {
        return (
          <ResourceItem
          type={resource.type}
            key={i}
            number={i}
            active={active}
            fn={() => {
              setActive(i);
              setVal(resource.type);
            }}
          ></ResourceItem>
        );
      })}
    </nav>
  );
};

export default Nav;
