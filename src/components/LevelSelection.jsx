import { homeCollectionTypes, levels } from "../constants/collectionTypes";
import LevelCard from "./LevelCard";

export default function LevelSelection() {
  const relURL = window.location.pathname.split("/")[1];
  if (relURL === "") {
    return (
      <div className="flex flex-wrap justify-around max-w-screen-xl mx-auto my-0">
        {homeCollectionTypes.map((type) => (
          <LevelCard type={type} key={type.url} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-around max-w-screen-xl mx-auto my-0">
      {levels[relURL].map((type) => (
        <LevelCard type={type} key={type.url} />
      ))}
    </div>
  );
}
