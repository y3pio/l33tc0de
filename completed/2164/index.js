/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
  const even = nums.filter((e, i) => i % 2 === 0)
  const odd = nums.filter((e, i) => i % 2 === 1)

  even.sort((a,b) => b-a);
  odd.sort((a,b) => a-b);

  let result = [];

  while(even.length > 0) {
    result.push(even.pop())
    odd.length > 0 && result.push(odd.pop())
  }


  return result;

};