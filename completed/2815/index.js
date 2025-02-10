/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
  const largestNumMap = new Map();

  nums.forEach(num => {
    const numArr = num.toString().split('')
    let largest = -Infinity;

    numArr.forEach(n => {
      largest = Math.max(largest, parseInt(n));
    })

    if (largestNumMap.has(largest)) {
      const largestList = largestNumMap.get(largest);
      largestList.push(num);
      largestNumMap.set(largest, largestList)
    } else {
      largestNumMap.set(largest, [num])
    }

  })

  let largestCandidate = -1;

  largestNumMap.forEach((val, keu) => {
    if (val.length === 2) {
      largestCandidate = Math.max(largestCandidate, val[0] + val[1])
    } else if (val.length > 2) {
      val.sort((a,b) => b - a)
      largestCandidate = Math.max(largestCandidate, val[0] + val[1])
    }
  })

  return largestCandidate;
};