import TimeLine from "./TimeLine";
import styles from "./Lesson.module.css";
import Assg from "./Assignment";

const Lesson = () => {
  return (
    <>
      <div className={"text-red-400 font-semibold text-xl mb-2 space-x-2"}> Module 1</div>
      <TimeLine>
        <h2 className="h3">Module Tile</h2>
        <p className={styles.moduleText + " mb-11"}>
          Our Diploma in Graphic Design introduces students to the basic concepts of Graphic Design and to the world of Visual Communication. Students will explore the concept of Visual Thinking,
          Elements & Principles of Design and the basics of Typography. The course also familiarises students with the essential software, Adobe Photoshop, Illustrator and InDesign and builds skills
          in this area with hands-on lessons.
        </p>
        <div className={"border-1 border-gray-300 rounded-3xl p-4"}>
          <video></video>
        </div>
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
