import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Row, Col, Container } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Banner from "./components/Banner";
import LayoutCourses from "./components/LayoutCourses";
import CourseModule from "./components/Content/CourseModule";

export default function Home() {
  return (
    <Row>
      <Col className={""} xs={7}>
        <div className={"d-flex mb-5 "}>
          <div className={styles.moduleSwitcher}>1</div>
          <div className={styles.moduleSwitcher + " " + styles.moduleSwitcherActive}>2</div>
          <div className={styles.moduleSwitcher + " " + styles.moduleSwitcherInActive}>3</div>
          <div className={styles.moduleSwitcher}>4</div>
        </div>
        <div>
          <CourseModule></CourseModule>
        </div>
      </Col>
      <Col xs={5}>
        <Banner />
      </Col>
    </Row>
  );
}

Home.Layout = LayoutCourses;
