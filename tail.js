const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:`,   actual, ` === `,  expected);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:`, actual, ` !===`, expected);
  }

};

const tail = function(array) {
  return array.slice(1);
    
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

//test 1
const words = ["hello", "world"];
tail(words);
assertEqual(words.length, 2);

//test 2
const empty = [];
tail(empty);
assertEqual(empty.length, 0);