import { useEffect } from "react";
import ReactPlayer from "react-player";
// import url from "./../udemy.mp4";

const Video = (props) => {
  useEffect(() => {
    console.log("can play", ReactPlayer.canPlay("https://www.youtube.com/watch?v=ysz5S6PUM-U"));
  });
  return props.type ? (
    <div className={"border-1 border-gray-300 rounded-3xl p-3 vid"}>
      <ReactPlayer
        light
        playing
        width="100%"
        height="100%"
        url={props.url}
        className="player"
        config={{
          youtube: {
            playerVars: { showinfo: 1 },
            modestbranding: 1,
          },
        }}
        controls={true}
      ></ReactPlayer>
    </div>
  ) : (
    <div className={"border-1 border-gray-300 rounded-3xl p-3 flex-1 vid-intro"}>
      {/* <h1 className="text-9xl font-semibold">dadlafd</h1> */}
      <ReactPlayer
        light
        config={{
          youtube: {
            playerVars: { showinfo: 1 },
            modestbranding: 1,
          },
        }}
        controls={true}
        width="100%"
        height="100%"
        url="https://www.youtube.com/watch?v=d46Azg3Pm4c"
      ></ReactPlayer>
    </div>
  );
};

export default Video;
