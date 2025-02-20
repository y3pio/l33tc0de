/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const sArr = s.split(' ');
  const pArr = pattern.split('')

  if (sArr.length !== pArr.length) {
    return false;
  }

  const charMap = new Map();
  const wordMap = new Map();

  for (let i=0; i<pArr.length; i++) {
    // Char map 1 to many mapping check / word map 1 to many mapping check
    if (charMap.has(pArr[i]) && charMap.get(pArr[i]) !== sArr[i]) {
      return false;
    } else if (wordMap.has(sArr[i]) && wordMap.get(sArr[i]) !== pArr[i]) {
      return false;
    } else {
      charMap.set(pArr[i], sArr[i])
      wordMap.set(sArr[i], pArr[i])
    }
  }

  return true;
};