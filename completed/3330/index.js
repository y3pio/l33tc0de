/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
  let numberOfRep = 0;

  for (let i=0; i<word.length-1; i++) {
    if (word[i] === word[i+1]) {
      numberOfRep++;
    }
  }

  return 1 + numberOfRep;
};