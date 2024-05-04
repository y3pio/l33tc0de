var rob = function(nums) {
  const houses = nums.length;

  if (houses === 1) {
    return nums[0];
  }

  const maxRobbedAtHouse = Array(houses).fill(0);
  maxRobbedAtHouse[0] = nums[0];
  // 2nd house is either previous house robbed, or current house robbed
  maxRobbedAtHouse[1] = Math.max(nums[0], nums[1]);

  for (let i=2; i<houses; i++) {
    // Current max for ith house is either the previous house, which means we can't rob ith house
    // Or max is we don't rob i-1 house and rob ith house and the i-2th house.
    maxRobbedAtHouse[i] = Math.max(maxRobbedAtHouse[i-1], nums[i] + maxRobbedAtHouse[i-2])
  }

  return maxRobbedAtHouse[houses-1];
};