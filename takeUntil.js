const takeUntil = function(array, callback) {
  // ...
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    
    } else {
      results.push(item);
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


//Testing with asserEqualArray//

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

//Three Test Cases:

assertArraysEqual(takeUntil(data1, (x) => x < 0), [1, 2, 5, 7, 2]); //true
assertArraysEqual(takeUntil(data2, (x) => x === ','), ["I've", 'been', 'to', 'Hollywood']); // true
assertArraysEqual(takeUntil(data1, (x) => x < 0), [1, 2, 5, 7, 5]); //false