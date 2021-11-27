import styles from "./Layout.module.css";
import Link from "next/link";

import MyNav from "./Nav";

export default function Layout(props) {
  return (
    <div className={styles.container}>
      <MyNav></MyNav>
      {/* <div className={styles.wrapper}>
      </div> */}
        <main className={styles.main}>{props.children}</main>
    </div>
  );
}
