const assert = require('chai').assert;
const middle = require("../middle");

//test cases

describe("#middle", () => {
  it("returns middle of [1, 2, 3] as [2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns middle of [1] as []", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns middle of [1, 2] as []", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns middle of [1, 2, 3] as [2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns middle of [1, 2, 3, 4] as [2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns middle of [1, 2, 3, 4, 5, 6] as [3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});