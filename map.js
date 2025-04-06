const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

};

const results1 = map(words, (word) => word[0]);
console.log(results1);

//
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length)
    return false;
  else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Arrays are equal: [${array1}] === [${array2}]`);
  } else {
    console.log(`🛑🛑🛑 Arrays are not equal: [${array1}] !== [${array2}]`);
  }

};

//Test Cases:

assertArraysEqual(map(words, (word) => word[0]), ['g', 'c', 't', 'm', 't']); //true
assertArraysEqual(map(words, (word) => word[1]), ['g', 'c', 't', 'm', 't']); // false
assertArraysEqual(map(words, (word) => word[2]), ['g', 'c', 't', 'm', 't']); //false