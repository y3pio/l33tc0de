/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// HACKED solution, should ideally be done using two pointers

var reverseWords = function(s) {
  const sArr = s.join('').split(' ').reverse();
  const result = sArr.join(' ').split('');
  for (let i=0; i<result.length; i++) {
    s[i] = result[i]
  }
};