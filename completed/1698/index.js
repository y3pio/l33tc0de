/**
 * @param {string} s
 * @return {number}
 */
var countDistinct = function(s) {
  const subStrings = new Set();

  for (let i=0; i<s.length; i++) {
    let result = '';
    for (let j=i; j<s.length; j++) {
      result += s[j];
      subStrings.add(result)
    }
  }

  return subStrings.size;
};