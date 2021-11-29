import { Row, Col } from "react-bootstrap";
import Banner from "../components/Banner";
import LayoutCourses from "../components/LayoutCourses";
import CourseModule from "../components/Content/CourseModule";
import Video from "../components/Content/Video";
import { useEffect } from "react";
import { connect } from "react-redux";
import ModuleSwitcher from "../components/Content/ModSwitcher";
// import { ShowpopupAction, HidepopupAction } from "../Redux.js/Actions/popUpActions";

function Home(props) {
  useEffect(() => {
    console.log("from home active course modules", props.state.activeCourse.modules);
  });

  return (
    <Row>
      <Col className={""} md={12} lg={8}>
        {/* <Col className={""}> */}
        <div className="flex flex-wrap pb-4 w-full gap-4">
          <Video></Video>
          <Video></Video>
        </div>
        <div className={"d-flex py-4 sticky top-28 left-0 bg-white z-10"}>
          {props.state.activeCourse.modules.map((mod, i) => {
            return <ModuleSwitcher key={i + 1} number={i + 1} inactive={mod.started ? false : true} module={mod}></ModuleSwitcher>;
          })}
        </div>
        <div className="mt-6">
          {props.state.activeCourse.modules.map((mod, i) => {
            return <CourseModule module={mod} key={i} modNum={i + 1}></CourseModule>;
          })}
        </div>
      </Col>
      {/* <Col xs={5}>
        <Banner />
      </Col> */}
    </Row>
  );
}

Home.Layout = LayoutCourses;
const mapStateToProps = (state) => {
  return {
    state: state.coursesReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
