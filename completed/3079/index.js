/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function(nums) {
  const encrypt = (n) => {
    let max = 0;
    const nArr = n.toString().split('');
    nArr.forEach(digit => {
      max = Math.max(max, parseInt(digit));
    })

    return parseInt(nArr.map(n => max).join(''))
  }

  return nums.reduce((sum, n) => sum + encrypt(n), 0);
};