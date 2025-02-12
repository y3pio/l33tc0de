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
        // numList.push(n);
        // numList.sort((a,b) => b - a);
        // numList.pop();

        // Trying static comparison
        const [n1, n2] = numList;
        const n3 = n;

        let largest = 0;
        let secondLargest = 0;

        if (n1 >= n2 && n1 >= n3) {
          largest = n1;
          secondLargest = Math.max(n2, n3);
        } else if (n2 >= n1 && n2 >= n3) {
          largest = n2;
          secondLargest = Math.max(n1,n3);
        } else if (n3 >= n1 && n3 >= n2) {
          largest = n3;
          secondLargest = Math.max(n1,n2);
        }

        numList[0] = largest;
        numList[1] = secondLargest;
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

  // Trying brute force O(n^2)
  // Timesout for Testcase #64
  // let maxCandidate = -1;
  // for (let i=0; i<nums.length; i++) {
  //     for (let j=i+1; j<nums.length; j++) {
  //         let currNum = nums[i];
  //         let n1 = 0
  //         while(currNum > 0) {
  //             n1 += currNum % 10;
  //             currNum = Math.floor(currNum/10);
  //         }

  //         currNum = nums[j]
  //         let n2 = 0
  //         while(currNum > 0) {
  //             n2 += currNum % 10;
  //             currNum = Math.floor(currNum/10);
  //         }

  //         if (n1 === n2) {
  //             maxCandidate = Math.max(maxCandidate, nums[i] + nums[j]);
  //         }

  //     }
  // }

  // return maxCandidate;
};