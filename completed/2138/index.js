/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
  const result = [];
  let currentString = '';
  for (let i=0 ;i<s.length; i++) {
    currentString += s[i];

    if (currentString.length === k) {
      result.push(currentString);
      currentString = '';
    }
  }

  if (currentString.length > 0) {
    while(currentString.length < k) {
      currentString += fill;
    }

    result.push(currentString);
  }

  return result;
};