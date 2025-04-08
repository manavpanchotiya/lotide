const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
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

assertEqual(countLetter('this is working'),{ t: 1, h: 1, i: 3, s: 2, w: 1, o: 1, r: 1, k: 1, n: 1, g: 1 });