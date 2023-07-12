const homeCollectionTypes = [
  { name: "Baby Program", url: "baby-program" },
  { name: "Water Safety Program", url: "water-safety-program" },
  { name: "Stroke Program", url: "stroke-program" },
  { name: "PODS", url: "pods" },
  { name: "Coach's Corner", url: "coachs-corner" },
];

const levels = {
  "baby-program": [
    { name: "Parent Baby", url: "pb" },
    { name: "Parent Tot", url: "PT" },
    { name: "Advanced Parent Tot", url: "ADVPT" },
  ],
  "water-safety-program": [
    { name: "Water Safety 1", url: "WS1" },
    { name: "Water Safety 2", url: "WS2" },
    { name: "Water Safety 3", url: "WS3" },
  ],
  "stroke-program": [
    { name: "Stroke 1", url: "ST1" },
    { name: "Stroke 2", url: "ST2" },
    { name: "Stroke 3", url: "ST3" },
  ],
  pods: [],
  "coachs-corner": [],
};

const collectionTypesOld = [
  { name: "Parent Baby", url: "PB" },
  { name: "Parent Tot", url: "PT" },
  { name: "Advanced Parent Tot 1", url: "ADVPT-1" },
  { name: "Advanced Parent Tot 2", url: "ADVPT-2" },
  { name: "Water Safety 1", url: "WS-1" },
  { name: "Water Safety 2", url: "WS-2" },
  { name: "Water Safety 3", url: "WS-3" },
  { name: "Stroke 1", url: "ST-1" },
  { name: "Stroke 2", url: "ST-2" },
  { name: "Stroke 3", url: "ST-3" },
  { name: "Pre Team", url: "Preteam" },
];

export { homeCollectionTypes, levels };
