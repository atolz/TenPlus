import React from "react";
import styles from "./TimeLine.module.css";

const TimeLine = (props) => {
  return <div className={styles.timelineBox}>{props.children}</div>;
};

export default TimeLine;
