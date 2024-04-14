type unionSN = number | string;
type unionLiteralS = 'as-number' | 'as-text';

function combine(
  input1: unionSN,
  input2: unionSN,
  resulConversion: unionLiteralS,
) {
  let result;
  console.log(resulConversion)

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resulConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combineNames = combine("hwt", " 20", "as-text");
console.log(combineNames);
