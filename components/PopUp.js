import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ShowpopupAction, HidepopupAction } from "../Redux/Actions/popUpActions";
import { ChangeActiveCourse } from "../Redux/Actions/courses";
import Link from "next/link";

const PopUp = (props) => {
  useEffect(() => {
    console.log("from pop upcomponent", props.visible);
  });
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        console.log(props.coursesStore.activeCourse);
        props.hidePopUp(false);
      }}
      className={"fixed top-0 left-0 h-screen w-screen rounded-3xl " + `${props.visible ? "block" : "hidden"}`}
      style={{ backgroundColor: "rgba(2, 4, 23, 0.7)" }}
    >
      <div className="p-20 mb-6 popUpCourse">
        <div className="flex justify-between items-center mb-10 cursor-pointer">
          <p className="h2">Switch courses</p>
          <Link href="/browse">
            <span className="text-red-400">
              <i className="bi bi-plus"></i>Add a new course
            </span>
          </Link>
        </div>
        {props.coursesStore.enrolled.map((course, i) => {
          return (
            <Link href="/" key={i}>
              <section
                onClick={(e) => {
                  // e.preventDefault();
                  props.switchActiveCourse(course.id);
                  console.log("changed active course to:", props.coursesStore.activeCourse); //onclick always lags...
                }}
                className="flex items-center cursor-pointer mb-4"
              >
                <img className="rounded-2xl mr-6 h-16 w-16 object-cover " src={course.img} />
                <p className="h4">{course.name}</p>
              </section>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.popUpReducer,
    coursesStore: state.coursesReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showPopUP: (payload) => {
      dispatch(ShowpopupAction(payload));
    },
    hidePopUp: (payload) => {
      dispatch(HidepopupAction(payload));
    },
    switchActiveCourse: (id) => {
      dispatch(ChangeActiveCourse(id));
      console.log("changing active course");
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopUp);
// export default PopUp;
