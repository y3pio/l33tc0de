/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const bagOfWords = paragraph
    .replace(/[^a-zA-Z ]/g, ' ')
    .split(' ')
    .map(word => word.toLowerCase())
    .filter(word => !banned.includes(word));

  const countMap = new Map();
  bagOfWords.forEach(word => {
    if (countMap.has(word)) {
      const newCount = countMap.get(word) + 1;
      countMap.set(word, newCount);
    } else {
      countMap.set(word, 1);
    }
  });

  let maxCandidate = {
    word: undefined,
    count: -1
  };

  countMap.forEach((val, key) => {
    if (val > maxCandidate.count && key !== '') {
      maxCandidate.word = key;
      maxCandidate.count = val;
    }
  })

  return maxCandidate.word;
};