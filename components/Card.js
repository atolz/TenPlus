import { Fragment } from "react";
import styles from "./Card.module.css";

function Card() {
  return (
    <Fragment>
      <div className={styles.card}>
        <img src="https://www.shawacademy.com/assets/course-cards/mycourse/graphic-design.png" />
        <div className={styles.cardBody}>
          <h4 className={"h4 " + styles.cardTitle}>Graphics design</h4>
          <div className={"flex justify-center items-center"}>
            <a className={styles.cardCta}>Enroll Now</a>
            <a className={styles.cardLink + " ml-auto"}>Learn more</a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;
