import React from "react";
import Lesson from "./Lesson";
import TimeLine from "./TimeLine";
import styles from "./CourseModule.module.css";
import EOMA from "./EndOfModAss";

const CourseModule = (props) => {
  return (
    <>
      <TimeLine >
        <h2 id={props.modNum} className={styles.moduleHeader}>
          {props.module.title}
        </h2>
        <p className={styles.moduleText}>{props.module.desc}</p>
        <div className={styles.starterHeader + " mt-6"}>
          <p>STARTER PACK</p>
          <p>fREE</p>
        </div>
        <div className={styles.starterLinks + " " + "d-flex justify-between mt-6 roun"}>
          <p className={"cursor-pointer"}>SarterPack</p>
          <p>Download for free</p>
        </div>
      </TimeLine>
      {props.module.lessons.map((el, i) => {
        return <Lesson key={i} lesson={el} moduleTitle={props.module.title}></Lesson>;
      })}
      <EOMA></EOMA>
    </>
  );
};

export default CourseModule;
