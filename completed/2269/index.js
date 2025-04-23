/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
  const nArr = num.toString().split('');
  let result = 0;
  for (let i=0; i<=nArr.length-k; i++) {
    let curr = '';
    for (let j=i; j<i+k; j++) {
      curr += nArr[j];
    }

    if (num % parseInt(curr) === 0) {
      result++;
    }
  }

  return result;
};