const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:`,   actual, ` === `,  expected);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:`, actual, ` !===`, expected);
  }

};

const countLetter = function(letters) {
  const result = {};
  for (const letter of letters) {
    if (letter !== ' ') {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};
console.log(countLetter('this is working'));
