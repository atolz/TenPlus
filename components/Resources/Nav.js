import { useState, useContext, useEffect } from "react";
import { ResourceContext } from "../../pages/context/ResourceContext";
import ResourceItem from "./ResourceItem";
import { connect } from "react-redux";

const Nav = (props) => {
  const resources = [
    { type: "unlock", purchased: false },
    { type: "unlock", purchased: false },
  ];
  const [active, setActive] = useState();
  const { setVal, activeCard, selectedMod, setModule } = useContext(ResourceContext);
  useEffect(() => {
    console.log("in nav...", activeCard, resources);
  }, [activeCard]);
  return (
    <nav className="flex flex-col flex-1">
      <StarterComp setVal={setVal} active={activeCard} />
      {props.modules.map((mod, i) => {
        return (
          <ResourceItem
            type="mod"
            key={i}
            number={i + 1}
            active={active}
            activeCard={activeCard}
            fn={() => {
              setActive(i + 1);
              setVal("mod");
              setModule(mod.title);
            }}
          ></ResourceItem>
        );
      })}
    </nav>
  );
};

const StarterComp = (props) => {
  return (
    <div
      onClick={() => {
        props.setVal("starter");
      }}
      className={
        props.active == "starter"
          ? "flex border-1 shadow-sm rounded-3xl h-32 px-7 items-center w-full mb-4 cursor-pointer tes"
          : "flex h-32 px-7 items-center w-full mb-4 cursor-pointer border-1 border-transparent"
      }
    >
      <div className="h-16 w-16 p-3 bg-yellow-100 rounded-3xl mr-12">
        <svg id="icon-rocket" viewBox="0 0 32 32" style={{ display: "inline-block", stroke: "#eb5b77", strokeWidth: "2px", fill: "#eb5b77" }}>
          <path d="M22 2l-10 10h-6l-6 8c0 0 6.357-1.77 10.065-0.94l-10.065 12.94 13.184-10.255c1.839 4.208-1.184 10.255-1.184 10.255l8-6v-6l10-10 2-10-10 2z"></path>
        </svg>
      </div>
      <div className="flex items-center justify-between">
        <p className={props.active == "starter" ? "text-3xl font-semibold text-gray-900 " : " text-3xl font-medium text-gray-900"}>Starter Pack</p>
      </div>
      <button className="h-14 px-4 rounded-3xl bg-gray-900 text-white ml-auto font-semibold text-xl">Free</button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    modules: state.coursesReducer.activeCourse.modules,
  };
}

export default connect(mapStateToProps)(Nav);
