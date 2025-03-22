/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function(wordsDict, word1, word2) {
  let index1 = -1;
  let index2 = -1;
  let minDistance = Infinity;
  let sameWord = word1 === word2;

  for (let i = 0; i < wordsDict.length; i++) {
    if (wordsDict[i] === word1) {
      if (sameWord) {
        if (index1 !== -1) {
          minDistance = Math.min(minDistance, i - index1);
        }
        index1 = i;
      } else {
        index1 = i;
        if (index2 !== -1) {
          minDistance = Math.min(minDistance, Math.abs(index1 - index2));
        }
      }
    } else if (wordsDict[i] === word2) {
      index2 = i;
      if (index1 !== -1) {
        minDistance = Math.min(minDistance, Math.abs(index1 - index2));
      }
    }
  }

  return minDistance;
};