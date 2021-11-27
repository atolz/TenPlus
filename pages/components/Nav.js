import sytles from "./Nav.module.css";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function MyNav() {
  return (
    <div className={sytles.sidebar}>
      <i className={"bi bi-cpu"} style={{ fontSize: "4em", color: "#a8abc1" }}></i>
      <div className={"text-primary"}>Courses</div>
      <nav className={sytles.nav}>
        <Link href="/">
          <div className={sytles.navItem}>
            <i className={"bi bi-house-fill"} style={{ fontSize: "2.8rem", color: "#a8abc1" }}></i>
            <span>My Courses</span>
          </div>
        </Link>
        <Link href="/timetable">
          <div className={sytles.navItem}>
            <i className={"bi bi-calendar3"} style={{ fontSize: "2.8rem", color: "#a8abc1" }}></i>
            <span>TimeTable</span>
          </div>
        </Link>
        <Link href="/courses">
          <div className={sytles.navItem}>
            <i className={"bi bi-compass-fill"} style={{ fontSize: "2.8rem", color: "#a8abc1" }}></i>
            <span>Browse</span>
          </div>
        </Link>
        <Link href="/account">
          <div className={sytles.navItem}>
            <i className={"bi bi-person-fill"} style={{ fontSize: "2.8rem", color: "#a8abc1" }}></i>
            <span>Account</span>
          </div>
        </Link>
        <Link href="#">
          <div className={sytles.navItem}>
            <i className={"bi bi-question-circle"} style={{ fontSize: "2.8rem", color: "#a8abc1" }}></i>
          </div>
        </Link>
      </nav>
      {/* <Image src={"/public/motherboard-fill.svg"} width={"32"} height={"32"} alt={"..."} /> */}
      {/* <img src="/public/motherboard-fill.svg" alt="Bootstrap" width="32" height="32" /> */}
    </div>
  );
}
