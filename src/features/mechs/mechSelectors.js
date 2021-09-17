const WEIGHT_CLASSES = [
  { name: "Light", weights: [20, 25, 30, 35] },
  { name: "Medium", weights: [40, 45, 50, 55] },
  { name: "Heavy", weights: [60, 65, 70, 75] },
  { name: "Assault", weights: [80, 85, 90, 95, 100] },
];

export function getWeight(weight) {
  const weight_class = WEIGHT_CLASSES.find((weightclass) => {
    return weightclass.weights.includes(weight);
  }) || {
    name: undefined,
  };
  return weight_class.name;
}
