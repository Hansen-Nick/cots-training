import collectionTypes from "../constants/collectionTypes";
import LevelCard from "./LevelCard";

export default function Home() {
  return (
    <div className="flex flex-wrap justify-around max-w-screen-xl mx-auto my-0">
      {collectionTypes.map((type) => (
        <LevelCard type={type} key={type.url} test={"test"} />
      ))}
      <LevelCard type={{ name: "Quizzes", url: "quizzes" }} />
    </div>
  );
}
