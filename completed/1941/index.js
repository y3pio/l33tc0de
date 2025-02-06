/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
  const seenMap = new Map();

  for (let i=0; i<s.length; i++) {
    const char = s[i];
    if (seenMap.has(char)) {
      seenMap.set(char, seenMap.get(char) + 1);
    } else {
      seenMap.set(char, 1);
    }
  }

  const count = seenMap.get(s[0]);
  let result = true;
  seenMap.forEach((val) => {
    if (val !== count) {
      result = false;
      return false;
    }
  })

  return result;
};