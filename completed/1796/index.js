/**
 * @param {string} s
 * @return {number}
 */
const digits = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])
var secondHighest = function(s) {
  const result = new Set();
  s.split('').forEach(c => {
    if (digits.has(c)) {
      result.add(parseInt(c))
    }
  })

  if (result.size <= 1) {
    return -1;
  }

  const resultArr = Array.from(result);
  resultArr.sort((a,b) => b - a);

  return resultArr[1];
};