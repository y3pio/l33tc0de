console.clear();

const n1 = [3,4,5,1,2];
const n2 = [2,1,3,4];
var check = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[(i+1) % nums.length]) {
      count ++;
    }
  }

  return (count <=1);
};

console.log(check(n2))