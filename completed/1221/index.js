/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let lCount = 0;
  let rCount = 0;
  let result = 0;
  for(let i=0 ;i<s.length; i++) {
    if (s[i] === 'R') {
      rCount += 1;
    } else if (s[i] === 'L') {
      lCount += 1;
    }

    if (rCount === lCount) {
      result +=1 ;
      lCount = 0;
      rCount = 0;
    }
  }

  return result;
};
