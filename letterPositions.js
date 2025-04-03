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

const letterPositions = function(sentence) {
  let results = {};

  // logic to update results here
  for (let index = 0; index < sentence.length; index++) {
    let letter = sentence[index];

    if (letter !== ' ') {
      if (!results[letter]) {
        results[letter] = [];
      }
    
      results[letter].push(index);
    }
  }
  
  return results;
};

console.log(letterPositions("lighthouse in the house"));
const result = letterPositions('hello');
assertArraysEqual(result['h'], [0]);
assertArraysEqual(result['e'], [1]);
assertArraysEqual(result['l'], [2, 3]);
assertArraysEqual(result['o'], [4]);