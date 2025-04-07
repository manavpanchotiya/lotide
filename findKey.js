const findKey = function(object, callback) {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

console.log(findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    Noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
)); // => "Noma"

//Tets with assertEual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:`,   actual, ` === `,  expected);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:`, actual, ` !===`, expected);
  }

};

//Test Cases
assertEqual(findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    Noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2), "Noma"); // => "Noma");

assertEqual(findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    Noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 3), "Akaleri"); // => "Akaleri");

assertEqual(findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    Noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 1), "Blue Hill"); // => "Blue Hill");