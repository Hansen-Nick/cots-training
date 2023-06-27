import LevelCard from "./LevelCard";

export default function SubCatsLayout() {
  const mapNameToSubCats = {
    baby: ["Parent Baby", "Parent Tot", "Advanced Parent Tot"],
    waterSafety: [
      "Water Safety 1",
      "Water Safety 2",
      "Water Safety 3",
      "Water Safety (8 years and older)",
    ],
    stroke: ["Stroke 1, Stroke 2, Stroke 3"],
    name: "Quizzes",
    url: "quizzes",
  };
  return (
    <div className="flex flex-wrap justify-around max-w-screen-xl mx-auto my-0">
      {infoTypes.map((type) => (
        <LevelCard type={mapNameToSubCats[type.name]} key={type.url} />
      ))}
    </div>
  );
}
