/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
  let max = 0;
  let e = 0;

  for (let c of s) {
    if (c === 'E') {
      e +=1
    } else {
      e -=1
    }

    max = Math.max(max,e);
  }

  return max;
};