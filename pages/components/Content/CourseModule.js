import React from "react";
import Lesson from "./Lesson";
import TimeLine from "./TimeLine";
import styles from './CourseModule.module.css'
import EOMA from './EndOfModAss'


const CourseModule = () => {
  return (
      <>
    <TimeLine>
      <h2 className={styles.moduleHeader}>Module Tile</h2>
      <p className={styles.moduleText}>
        Our Diploma in Graphic Design introduces students to the basic concepts of Graphic Design and to the world of Visual Communication. Students will explore the concept of Visual Thinking,
        Elements & Principles of Design and the basics of Typography. The course also familiarises students with the essential software, Adobe Photoshop, Illustrator and InDesign and builds skills in
        this area with hands-on lessons.
      </p>
      <div className={styles.starterHeader + " mt-6"}>
        <p>STARTER PACK</p>
        <p>fREE</p>
      </div>
      <div className={styles.starterLinks + " " + "d-flex justify-between mt-6 roun"}>
        <p className={"cursor-pointer"}>SarterPack</p>
        <p>Download for free</p>
      </div>
    </TimeLine>
    <Lesson></Lesson>
    <Lesson></Lesson>
    <Lesson></Lesson>
    <EOMA></EOMA>
    </>
  );
};

export default CourseModule;
