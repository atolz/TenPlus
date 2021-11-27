import { Row, Col, Container } from "react-bootstrap";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { NavLink } from "react-router-dom";
import { useRouter } from "next/router";

const LayoutCourses = (props) => {
  const router = useRouter();
  return (
    <Container fluid>
      <header className={"mb-5 d-flex flex-column align-items-start"}>
        <div className={"d-flex align-items-center mb-4"}>
          <p className={styles.courseName}>Graphics Design</p>
          <i className={"bi bi-three-dots cursor-pointer" + styles.dropDown} style={{ fontSize: "2em", color: "#a8abc1" }}></i>
        </div>
        <tab className={"d-flex align-items-center mt-3 " + styles.tab}>
          <Link href={"/"}>
            <div className={router.pathname == "/" ? styles.tabItem + " " + styles.tabItemActive : styles.tabItem}>Content</div>
          </Link>
          <Link href={"/resources"}>
            <div className={router.pathname == "/resources" ? styles.tabItem + " " + styles.tabItemActive : styles.tabItem}>Resources</div>
          </Link>
          {/* <Link href="/resources" className={router.pathname == "/resources" ? `${styles.tabItemActive} ${styles.tabItem}` : `${styles.tabItem}`}>
            Resource
          </Link> */}
          <Link href="/accessment">
              <div className={router.pathname == "/accessment" ? styles.tabItem + " " + styles.tabItemActive : styles.tabItem}>Assessment</div>
          </Link>
        </tab>
      </header>
      {props.children}
    </Container>
  );
};

export default LayoutCourses;
