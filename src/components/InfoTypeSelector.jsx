import LevelCard from "./LevelCard";

export default function InfoTypeSelector() {
  const infoTypes = [
    { name: "Videos", url: "videos" },
    { name: "Documents", url: "docs" },
    { name: "Quizzes", url: "quizzes" },
  ];
  return (
    <div className="flex flex-wrap justify-around max-w-screen-xl mx-auto my-0">
      {infoTypes.map((type) => (
        <LevelCard type={type} key={type.url} />
      ))}
    </div>
  );
}
