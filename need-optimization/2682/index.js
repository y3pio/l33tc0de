/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function(n, k) {
  const passed = {};
  let iteration = 1;
  let current = 1;
  while (true) {
    passed[current] = passed[current] ? passed[current] + 1 : 1;

    if (passed[current] === 2) {
      break;
    }
    let jump = iteration * k;
    while(jump > 0) {
      current += 1;
      if (current > n) {
        current = 1;
      }
      jump--;
    }
    iteration++;
  }


  const losers = [];
  for(let i=1; i<=n; i++) {
    if (!passed[i]) {
      losers.push(i);
    }
  }

  return losers;
};