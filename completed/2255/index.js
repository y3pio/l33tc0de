/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
  return words.reduce((count, word) => {
    if (s.indexOf(word) === 0) {
      count++;
    }

    return count;
  }, 0)
};