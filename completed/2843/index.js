/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
  let result = 0;
  for (let i=low; i<=high; i++) {
    const numString = i.toString();
    if (numString.length % 2 === 0) {
      let lsum = 0;
      let rsum = 0;
      let l = 0;
      let r = numString.length - 1;
      while(l < r) {
        lsum += parseInt(numString[l])
        rsum += parseInt(numString[r])
        l++;
        r--;
      }
      if (lsum === rsum) {
        result++;
      }
    }
  }

  return result;
};