/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
  const result = [];

  let start = 0;
  let i = 1;
  while(i<s.length) {
    if (s[i] !== s[i-1]) {
      if ((i-start) >= 3) {
        result.push([start, i-1])
      }
      start = i;
    }
    i++
  }

  if ((i-start) >= 3) {
    result.push([start, i-1])
  }

  return result;
};