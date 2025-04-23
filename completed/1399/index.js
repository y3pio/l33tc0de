/**
 * @param {number} n
 * @return {number}
 */

const getDigitSum = (digit) => {
  return digit.toString().split('').reduce((sum, n) => {
    return sum += parseInt(n);
  }, 0)
}

var countLargestGroup = function(n) {
  const freqMap = new Map();
  let max = 0;
  for (let i=1; i<=n; i++) {
    const sum = getDigitSum(i);

    const currentCount = freqMap.get(sum) || 0;
    const newCount = currentCount + 1;
    max = Math.max(max, newCount);
    freqMap.set(sum, newCount);
  }

  let result = 0;
  freqMap.values().forEach(v => {
    if (v === max) {
      result++;
    }
  })

  return result;
};