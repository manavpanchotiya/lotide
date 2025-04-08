const assert = require('chai').assert;
const tail = require("../tail");
const result = tail(["Hello", "Lighthouse", "Labs"]);
const resultFirst = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {
  it("returns tail of ['Hello', 'Lighthouse', 'Labs'] as ['Lighthouse', 'Labs]", () => {
    
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it("returns first element of ['Lighthouse', 'Labs] as 'Lighthouse' ", () => {
    assert.strictEqual(resultFirst[0], 'Lighthouse');
  });

  it("returns second element of ['Lighthouse', 'Labs] as 'Labs' ", () => {
    assert.strictEqual(resultFirst[1], 'Labs');
  });

});

