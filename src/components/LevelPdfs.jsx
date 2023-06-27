import { useState, useEffect } from "react";
import PdfCard from "./PdfCard";
import axios from "axios";

export default function LevelPdfs() {
  const [pdfInfo, setPdfInfo] = useState([]);
  const level = window.location.pathname.split("/")[1];

  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/${level}-documents?populate=*`)
      .then(({ data }) => {
        const info = data.data.map((item) => {
          console.log(item);
          return {
            url: item.attributes.Document.data.attributes.url,
            name: item.attributes.Name,
          };
        });
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
