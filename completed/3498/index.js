/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  const alphaMap = new Map();
  for (let i=0; i<alphabets.length; i++) {
    alphaMap.set(alphabets[i], 26-i);
  }

  let result = 0;
  for (let i=0; i<s.length; i++) {
    const idx = i+1;
    const val = alphaMap.get(s[i]);

    result += idx * val;
  }

  return result;
};