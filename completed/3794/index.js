/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
  let res = '';
  let l = k-1;
  let r = k;

  while (l >= 0) {
    res += s[l];
    l--;
  }

  while (r < s.length) {
    res += s[r];
    r++;
  }

  return res;
};