import { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import { ResourceContext } from "../../pages/context/ResourceContext";

const CardBuy = (props) => {
  const { selectedMod, setVal } = useContext(ResourceContext);
  const [mod, setMod] = useState([]);

  useEffect(() => {
    setMod(props.modules.filter((el) => el.title == selectedMod));
    // console.log('lenght is ....',mod.length);
  }, [selectedMod, props.modules]);

  // useEffect(() => {
  //   console.log("props.moudele changed");
  //   setVal("starter");
  // }, [props.modules[0].lessons[0]]);

  return (
    <div className="d-flex flex-col px-4 py-5 mt-1 border border-gray-400 rounded-3xl">
      <div className="rounded-3xl mx-3 py-10 px-7 flex bg-gray-900 justify-between">
        <div className="flex flex-col items-start">
          <p className="text-white font-semibold mb-3 text-xl">Unlock All Course Materials</p>
          <p className="text-gray-200 mb-3">
            Unlock your lessons <br /> notes, Slides & more!
          </p>
          <div className="text-white px-4 h-14 bg-red-400 rounded-full flex justify-center items-center text-xl">Buy Now</div>
        </div>
        <div className="text-6xl text-red-300 font-bold whitespace-nowrap self-end mt-2">NGN 3899.99</div>
      </div>
      <div>{mod.length}</div>

      <div className="mt-8 border border-gray-600 rounded-3xl mx-3 bg-gray-100 py-12 px-14">
        <div className="flex items-center mb-14">
          <i className={"bi bi-pencil cursor-pointer p-3 px-4 mr-8 text-green-200 bg-green-50 rounded-3xl"} style={{ fontSize: "2em" }}></i>
          <p className="mr-auto text-gray-900 font-semibold text-2xl">Lesson Resources</p>
          <i className={"bi bi-plus cursor-pointer text-red-400 font-bold"} style={{ fontSize: "2.1em" }}></i>
        </div>
        <div className="flex flex-col">
          {mod.length > 0 &&
            mod[0].lessons.map((les, i) => {
              return <SingleResource key={i} lesson={les} numb={i + 1}></SingleResource>;
            })}
        </div>
      </div>
    </div>
  );
};

const SingleResource = (props) => {
  return (
    <>
      <div className="d-flex items-center mb-14">
        <p className="mr-auto text-xl text-black">Lesson {props.numb} Notes</p>
        <i className={"bi bi-lock-fill cursor-pointer text-gray-900 font-bold "} style={{ fontSize: "1.5em", color: "#a8abc1" }}></i>
      </div>
      <div className="d-flex items-center mb-14">
        <p className="mr-auto text-xl text-black">Lesson {props.numb} Slides</p>
        <i className={"bi bi-lock-fill cursor-pointer text-gray-900 font-bold "} style={{ fontSize: "1.5em", color: "#a8abc1" }}></i>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    modules: state.coursesReducer.activeCourse.modules,
  };
}

export default connect(mapStateToProps)(CardBuy);
