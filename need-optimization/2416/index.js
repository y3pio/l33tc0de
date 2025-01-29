/**
 * @param {string[]} words
 * @return {number[]}
 */
var sumPrefixScores = function(words) {
  const prefixMap = new Map();

  words.forEach(word => {
    let prefix = '';
    for (let i=0; i<word.length; i++) {
      prefix += word[i];

      if (prefixMap.has(prefix)) {
        prefixMap.set(prefix, prefixMap.get(prefix) + 1);
      } else {
        prefixMap.set(prefix, 1);
      }
    }
  })

  return words.map(word => {
    let totalScore = 0;
    let prefix = '';
    for(let i=0; i<word.length; i++) {
      prefix += word[i];
      totalScore += prefixMap.get(prefix)
    };

    return totalScore;
  });
};