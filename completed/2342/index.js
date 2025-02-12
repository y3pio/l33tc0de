/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
  const sumMap = new Map();

  nums.forEach(n => {
    let currNum = n;
    let digitSum = 0;
    while (currNum > 0) {
      digitSum += currNum % 10;
      currNum = Math.floor(currNum/10);
    }

    if (sumMap.has(digitSum)) {
      const numList = sumMap.get(digitSum);
      if (numList.length < 2) {
        numList.push(n);
      } else {
        numList.push(n);
        numList.sort((a,b) => b - a);
        numList.pop();
      }

      sumMap.set(digitSum, numList);
    } else {
      sumMap.set(digitSum, [n]);
    }
  });

  let maxCandidate = -1;
  sumMap.forEach((val, key) => {
    if (val.length === 2) {
      maxCandidate = Math.max(val[0] + val[1], maxCandidate);
    }
  });

  return maxCandidate;
};