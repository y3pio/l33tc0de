/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
  return words.reduce((acc, word) => {
    word.split(separator).forEach(w => {
      if (w.length > 0) {
        acc.push(w);
      }
    })
    return acc;
  }, [])
};