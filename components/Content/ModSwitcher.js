import styles from "./ModSwitcher.module.css";
import { ChangeActiveMod } from "../../Redux/Actions/courses";
import { connect } from "react-redux";
import { useEffect } from "react";
import Link from "next/link";

const ModSwitcher = (props) => {
  useEffect(() => {
    console.log("in mod switcher", props.activeNumb);
  });
  return (
    <Link href={`#${props.number}`}>
      <div
        onClick={() => {
          props.changeActive(props.number);
        }}
        className={styles.moduleSwitcher + ` ${props.inactive ? styles.moduleSwitcherInActive : ""} ${props.activeNumb == props.number ? styles.moduleSwitcherActive : ""} `}
      >
        {props.number}
      </div>
    </Link>
  );
  {
    /* <div className={styles.moduleSwitcher}>1</div>
          <div className={styles.moduleSwitcher + " " + styles.moduleSwitcherActive}>2</div>
          <div className={styles.moduleSwitcher + " " + styles.moduleSwitcherInActive}>3</div>
          <div className={styles.moduleSwitcher}>4</div> */
  }
};

const mapStateToProps = (state) => {
  return {
    activeNumb: state.coursesReducer.activeMod,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeActive: (id) => {
      dispatch(ChangeActiveMod(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModSwitcher);
