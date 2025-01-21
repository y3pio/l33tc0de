/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
  const map1 = new Map();
  const map2 = new Map();

  word1.split('').forEach(letter => {
    if (!map1.get(letter)) {
      map1.set(letter, 1);
    } else {
      map1.set(letter, map1.get(letter) + 1);
    }
  })

  word2.split('').forEach(letter => {
    if (!map2.get(letter)) {
      map2.set(letter, 1);
    } else {
      map2.set(letter, map2.get(letter) + 1);
    }
  })

  let almostEqual = true;

  map1.forEach((val, key) => {
    const word2count = map2.get(key) || 0;
    if (Math.abs(val-word2count) > 3) {
      almostEqual = false;
    }
  })

  map2.forEach((val, key) => {
    const word1count = map1.get(key) || 0;
    if (Math.abs(val-word1count) > 3) {
      almostEqual = false;
    }
  })

  return almostEqual;
};