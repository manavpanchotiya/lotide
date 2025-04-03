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