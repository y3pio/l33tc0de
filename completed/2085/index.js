/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
  const w1 = new Map();
  const w2 = new Map();

  words1.forEach(w => {
    w1.set(w, (w1.get(w) || 0) + 1)
  })

  words2.forEach(w => {
    w2.set(w, (w2.get(w) || 0) + 1)
  })

  let result = 0;
  if (w1.size < w2.size) {
    w1.forEach((val, key) => {
      if (val === 1 && w2.get(key) === 1) {
        result++;
      }
    })
  } else {
    w2.forEach((val, key) => {
      if (val === 1 && w1.get(key) === 1) {
        result++;
      }
    })
  }

  return result;
};