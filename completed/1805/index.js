/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
  const uniqueIntegers = new Set(word.split(/[a-zA-Z]/).filter(e => e !== '').map(e => BigInt(e)));
  return uniqueIntegers.size;
};