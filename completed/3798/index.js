/**
 * @param {string} s
 * @return {string}
 */
var largestEven = function(s) {
  const nums = s.split('');

  if (s[s.length-1] === '2') {
    return s;
  }

  let i = nums.length-1;
  while(i >= 0) {
    if (nums[i] === '1') {
      nums[i] = '';
    } else if (nums[i] === '2') {
      break;
    }

    i--;
  }

  return nums.join('');
};