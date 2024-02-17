console.clear();

const nums = [2,2,1,1,1,2,2];
var majorityElement = function(nums) {
  const numMap = {};

  nums.forEach(n => {
    if (numMap[n]) {
      numMap[n]+= 1;
    } else {
      numMap[n] = 1;
    }
  });

  let maxKey = undefined;

  Object.keys(numMap).forEach(k => {
    if (!maxKey || numMap[k] > numMap[maxKey]) {
      maxKey = k;
    }
  })

  return maxKey
};

console.log(majorityElement(nums));