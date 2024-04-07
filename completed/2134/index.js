console.clear();

const t2 = [0,1,1,1,0,0,1,1,0];

var minSwaps = function(nums) {

  let numLength = nums.length;
  let numberOfOnes = nums.reduce((x, e) => x + e, 0);

  let max = -Infinity, currentSwap = 0;
  for (let i = 0, numbersToSwap = -numberOfOnes; i < numLength + numberOfOnes; i++, numbersToSwap++) {
    currentSwap += nums[i % numLength];
    if (numbersToSwap >= 0) {
      currentSwap -= nums[numbersToSwap % numLength];
    }
    max = Math.max(max, currentSwap);
  }
  return numberOfOnes - max;
};


console.log(minSwaps(t2));
