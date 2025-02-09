/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
  let max = 0;

  sentences.forEach(sentence => {
    const numWords = sentence.split(' ').length;
    max = Math.max(numWords, max);
  });

  return max;
};
