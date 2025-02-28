/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function(s1, s2, s3) {
  let n = 0;

  while(s1[n] && s1[n] === s2[n] && s1[n] === s3[n]) {
    n++;
  }

  if (n === 0) {
    return -1;
  }

  let count = 0;
  count += s1.length - n;
  count += s2.length - n;
  count += s3.length - n;

  return count;
};