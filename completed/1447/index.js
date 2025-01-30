/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function(n) {
  const calcMap = new Map();
  for (let den = 1; den <= n; den++) {
    for (let num = 1; num <den; num ++) {
      if (!calcMap.has(num/den)) {
        calcMap.set(num/den, `${num}/${den}`)
      }
    }
  };

  const result = [];
  calcMap.forEach((v, k) => {
    result.push(v);
  })

  return result;
};
