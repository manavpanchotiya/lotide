const assert = require('chai').assert;
const tail = require("../tail");
const result = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {
  it("returns tail of ['Hello', 'Lighthouse', 'Labs'] as ['Lighthouse', 'Labs]", () => {
    
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it("returns first element of ['Lighthouse', 'Labs] as 'Lighthouse' ", () => {
    assert.strictEqual(result[0], 'Lighthouse');
  });

  it("returns second element of ['Lighthouse', 'Labs] as 'Labs' ", () => {
    assert.strictEqual(result[1], 'Labs');
  });

  it("make sure the original array was not altered by the tail function", () => {
    const words = ["hello", "world", "lighthouse"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });
  

});

