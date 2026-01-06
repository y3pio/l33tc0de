/**
 * @param {number} n
 * @return {number}
 */
var minimumFlips = function(n) {
  const s = n.toString(2);
  let swap = 0;
  for (let i=0; i<s.length; i++) {
    if (s[i] !== s[s.length-1-i]) {
      swap++;
    }
  }
  return swap;
};