import LevelCard from "./LevelCard";

export default function SubCatsLayout() {
  const levels = {
    baby: ["parent-baby"],
    ws: [],
    stroke: [],
  };
  const collectionTypes = [
    { name: "Baby Program", url: "baby-program" },
    { name: "Water Safety Program" },
    { name: "Stroke Program", url: "stroke-program" },
    { name: "PODS", url: "pod" },
    { name: "Coach's Corner", url: "Coachs-Corner" },
  ];
  return (
    <div className="flex flex-wrap justify-around max-w-screen-xl mx-auto my-0">
      {infoTypes.map((type) => (
        <LevelCard type={mapNameToSubCats[type.name]} key={type.url} />
      ))}
    </div>
  );
}
