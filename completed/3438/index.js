/**
 * @param {string} s
 * @return {string}
 */
var findValidPair = function(s) {
  const freqMap = new Map();

  for (const c of s) {
    freqMap.set(c, (freqMap.get(c) || 0) + 1);
  }

  for(let i=0; i<s.length-1; i++) {
    if (s[i] !== s[i+1]
      && freqMap.get(s[i]) === parseInt(s[i])
      && freqMap.get(s[i+1]) === parseInt(s[i+1])) {
      return `${s[i]}${s[i+1]}`
    }
  }

  return '';
};