import { useState, useEffect } from "react";
import axios from "axios";
import VideoCard from "./VideoCard";

export default function LevelPdfs() {
  const [videoInfo, setVideoInfo] = useState([]);
  let level = window.location.pathname.split("/")[2];
  let levelUrl = "";
  if (level == "WS1" || level == "WS2" || level == "WS3") {
    levelUrl = `WS-${level.split("")[2]}`;
  } else if (level == "ST1" || level == "ST2" || level == "ST3") {
    levelUrl = `ST-${level.split("")[2]}`;
    console.log("levelurl", `ST-${level.split("")[2]}`);
  } else if (level == "ADVPT") {
    levelUrl = `ADVPT`;
  } else if (level == "/coachs-corner") {
    levelUrl = "coach-corner";
  } else if (level == "/pod") {
    levelUrl = "pod";
  } else {
    levelUrl = level;
  }

  useEffect(() => {
    axios
      .get(
        `https://cots-strapi-production.up.railway.app/api/${levelUrl}-videos?populate=*`
      )
      .then(({ data }) => {
        const info = data.data.map((item) => {
          return {
            embedId: item.attributes.embedId,
            name: item.attributes.Name,
          };
        });
        setVideoInfo(info);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-wrap justify-around max-w-screen-xl mx-auto my-0">
      {videoInfo.map((info) => (
        <VideoCard info={info} />
      ))}
    </div>
  );
}
