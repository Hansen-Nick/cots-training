import { useState, useEffect } from "react";
import PdfCard from "./PdfCard";
import axios from "axios";

export default function LevelPdfs() {
  const [pdfInfo, setPdfInfo] = useState([]);
  let level = window.location.pathname;
  console.log(level);

  if (level != "/pod" && level != "/coachs-corner") {
    level = level.split("/")[2];
  } else {
    level = level;
  }
  let levelUrl = "";
  if (level == "WS1" || level == "WS2" || level == "WS3") {
    levelUrl = `WS-${level.split("")[2]}`;
  } else if (level == "ST1" || level == "ST2" || level == "ST3") {
    levelUrl = `ST-${level.split("")[2]}`;
  } else if (level == "ADVPT") {
    levelUrl = `ADVPT-2`;
  } else if (level == "/coachs-corner") {
    levelUrl = "coach-corner";
  } else if (level == "/pod") {
    levelUrl = "pod";
  } else {
    levelUrl = level;
  }
  console.log(levelUrl);

  useEffect(() => {
    axios
      .get(
        `https://cots-strapi-production.up.railway.app/api/${levelUrl}-documents?populate=*`
      )
      .then(({ data }) => {
        const info = data.data.map((item) => {
          console.log(item);
          return {
            url: item.attributes.Document.data.attributes.url,
            name: item.attributes.Name,
          };
        });
        console.log("info here", info);
        setPdfInfo(info);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-wrap justify-around max-w-screen-xl mx-auto my-0">
      {pdfInfo.map((info) => (
        <PdfCard info={info} />
      ))}
    </div>
  );
}
