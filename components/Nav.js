import sytles from "./Nav.module.css";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import PopUp from "./PopUp";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ShowpopupAction, HidepopupAction } from "../Redux/Actions/popUpActions";

function MyNav(props) {
  useEffect(() => {
    console.log("from nav state:...", props.state);
  });
  return (
    <div className={sytles.sidebar}>
      <PopUp visible={props.state} />
      <i
        onClick={() => {
          console.log(props.state);
          props.state ? props.hidePopUp(false) : props.showPopUP(true);
          // props.showPopUP(true);
        }}
        className={"bi bi-layers-fill bg-gray-900 rounded-2xl p-3 mb-3 cursor-pointer" + " text-4xl hidden mmd:block"}
        style={{ color: "#fff" }}
      ></i>
      <nav className={sytles.nav}>
        <Link href="/">
          <div className={sytles.navItem}>
            <i className={"bi bi-house-fill text-3xl mmd:text-4xl"} style={{ color: "#a8abc1" }}></i>
            <span>My Courses</span>
          </div>
        </Link>
        <Link href="/timetable">
          <div className={sytles.navItem}>
            <i className={"bi bi-calendar3 text-3xl mmd:text-4xl"} style={{ color: "#a8abc1" }}></i>
            <span>TimeTable</span>
          </div>
        </Link>
        <Link href="/browse">
          <div className={sytles.navItem}>
            <i className={"bi bi-compass-fill text-3xl mmd:text-4xl"} style={{ color: "#a8abc1" }}></i>
            <span>Browse</span>
          </div>
        </Link>
        <Link href="/account">
          <div className={sytles.navItem + " hidden mmd:flex"}>
            <i className={"bi bi-person-fill text-3xl mmd:text-4xl"} style={{ color: "#a8abc1" }}></i>
            <span>Account</span>
          </div>
        </Link>
        <Link href="#">
          <div className={sytles.navItem + " hidden mmd:block"}>
            <i className={"bi bi-question-circle text-3xl mmd:text-4xl"} style={{ color: "#a8abc1" }}></i>
          </div>
        </Link>
      </nav>
      {/* <Image src={"/public/motherboard-fill.svg"} width={"32"} height={"32"} alt={"..."} /> */}
      {/* <img src="/public/motherboard-fill.svg" alt="Bootstrap" width="32" height="32" /> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state.popUpReducer,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyNav);
