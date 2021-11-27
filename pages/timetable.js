import { Fragment } from "react";
import styles from "./timetable.module.css";

export default function TimeTable() {
  return (
    <Fragment>
      <div className={"flex justify-between items-center"}>
        <h1 className={"h1"}>Classes</h1>
        <div className={styles.perweek}>
          0 <span>Classes this week</span>
        </div>
      </div>
      <div className={"d-flex mb-5 "}>
        <div className={styles.moduleSwitcher}>Nov 8-14</div>
        <div className={styles.moduleSwitcher + " " + styles.moduleSwitcherActive}>Nov 8-14</div>
        <div className={styles.moduleSwitcher + " " + styles.moduleSwitcherInActive}>Nov 8-14</div>
        <div className={styles.moduleSwitcher}>Nov 8-14</div>
      </div>

      <div className={styles.timetable}></div>

      <section className={styles.details}>
        <div className={styles.enrolled }>
          <h4 className={"h4 mb-14"}>Enrolled</h4>
          <div className={styles.card}>
            <div className={styles.card_header}>
              <img src="https://www.shawacademy.com/assets/course-cards/recordings/graphic-design.png" />
              <h3 className={"h3 mr-auto"}>Graphics Design</h3>
              <i className={"bi bi-three-dots cursor-pointer px-8 " + styles.dropDown} style={{ fontSize: "2em", color: "#a8abc1" }}></i>
            </div>
            <div className={styles.card_body}>
              <div className={styles.perweek}>
                0 <span className={"font-normal"}>Classes this week</span>
              </div>
              <a>Manage goals</a>
            </div>
          </div>
        </div>
        <div className={styles.shedules}>
          <div>
            <h4 className={"h4"}>Monday</h4>
            <p className={styles.infoMessage}>No classes sheduled</p>
          </div>
          <div>
            <h4 className={"h4"}>Monday</h4>
            <p className={styles.infoMessage}>No classes sheduled</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
