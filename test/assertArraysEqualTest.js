const assertArraysEqual = require("../assertArraysEqual");

//test
assertArraysEqual([1, 2, 3], [1, 2, 3]); //true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); //false