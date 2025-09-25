/**
 * @param {string[]} words
 * @return {string[]}
 */
const isAnagram = (word1, word2) => {
  const cMap = new Map();

  for (const c of word1) {
    cMap.set(c, (cMap.get(c) || 0) + 1);
  }

  for (const c of word2) {
    const newCount = (cMap.get(c) || 0) - 1;
    if (newCount === 0) {
      cMap.delete(c);
    } else {
      cMap.set(c, newCount);
    }
  }

  return cMap.size === 0;
}
var removeAnagrams = function(words) {
  let i = 1;
  while (i < words.length) {
    if (isAnagram(words[i], words[i-1])) {
      words.splice(i, 1)
      i = 0;
    }

    i++;
  }

  return words;
};