/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const result = [];
  for (let i=0; i<=n; i++) {
    let oneCount = 0;
    for(const c of i.toString(2)) {
      if (c === '1') {
        oneCount++;
      }
    }
    result[i] = oneCount;
  }

  return result;
};