/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2, similarPairs) {
  if (sentence1.length !== sentence2.length) {
    return false;
  }

  const similarityMap = new Map();

  for(let i=0; i<similarPairs.length; i++) {
    const key1 = similarPairs[i][0];
    const key2 = similarPairs[i][1];
    if (similarityMap.has(key1)) {
      const newVal = similarityMap.get(key1);
      newVal.push(key2)
      similarityMap.set(key1, newVal);
    } else {
      similarityMap.set(key1, [key2]);
    }

    if (similarityMap.has(key2)) {
      const newVal = similarityMap.get(key2);
      newVal.push(key1)
      similarityMap.set(key2, newVal);
    } else {
      similarityMap.set(key2, [key1]);
    }
  }

  for(let i=0; i<sentence1.length; i++) {
    const similarIndex = similarPairs[i];
    const word1 = sentence1[i];
    const word2 = sentence2[i];
    if (word1 !== word2 &&
      !similarityMap.get(word1)?.includes(word2) &&
      !similarityMap.get(word2)?.includes(word1)
    ) {
      console.log(word1, word2)
      return false;
    }
  }

  return true;
};