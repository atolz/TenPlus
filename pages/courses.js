import styles from "./courses.module.css";
import { Fragment } from "react";
import Card from "./components/Card";

export default function Courses() {
  return (
    <Fragment>
      <div className={styles.header}>
        <h1 className={"h1"}>Courses</h1>
        <div className={"alert w-full"}>
          <p className={"p"}>Choose from one of our Popular courses below or you can search by course, skill or faculty that you are most interested</p>
          <i className={"bi bi-x-circle ml-36 cursor-pointer"} style={{ fontSize: "2rem", color: "#a8abc1" }}></i>
        </div>
        <div className={styles.search + " flex justify-between"}>
          <div className={styles.searchBox}>
            <input placeholder="Search by course name or skill"></input>
          </div>
          <div className={styles.filter}>
            <span>Choose faculty</span>
            <i className={"bi bi-chevron-down mr-3"} style={{ fontSize: "1.2rem", color: "#fff" }}></i>
          </div>
        </div>
      </div>
      <main className={styles.main}>
        <h2 className={"h2 mb-12"}>Popular</h2>
        <div className={styles.courses}>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </main>
    </Fragment>
  );
}
