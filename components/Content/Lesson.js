import TimeLine from "./TimeLine";
import styles from "./Lesson.module.css";
import Assg from "./Assignment";
import Video from "./Video";

const Lesson = (props) => {
  return (
    <>
      <div className={"text-red-400 font-semibold text-xl mb-2 space-x-2"}> {props.moduleTitle}</div>
      <TimeLine >
        <h2 className="h3">{props.lesson.title}</h2>
        <p className={styles.moduleText + " mb-11"}>{props.lesson.desc}</p>
        <Video type="lesson" url={props.lesson.vidUrl} />
        <div className={styles.starterHeader + " " + " d-flex justify-between mt-6"}>
          <p>Lesson Resources</p>
          <p></p>
        </div>
        <div className={"mb-5"}>
          <div className={"flex items-center"}>
            <i className={"bi bi-file-earmark-text-fill mr-6"} style={{ fontSize: "2em", color: "#a8abc1" }}></i>
            <a className={"mr-auto flex-1 underline cursor-pointer"}>Lesson slides.pdf</a>
            <i className={"bi bi-lock-fill"} style={{ fontSize: "2em", color: "#a8abc1" }}></i>
          </div>
        </div>
        <Assg></Assg>
      </TimeLine>
    </>
  );
};

export default Lesson;
