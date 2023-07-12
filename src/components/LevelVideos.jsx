import { useState, useEffect } from "react";
import axios from "axios";
import VideoCard from "./VideoCard";

export default function LevelPdfs() {
  const [videoInfo, setVideoInfo] = useState([]);
  const level = window.location.pathname.split("/")[1];

  useEffect(() => {
    axios
      .get(
        `https://cots-strapi-production.up.railway.app/api/${level}-videos?populate=*`
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
