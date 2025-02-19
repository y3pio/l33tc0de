/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  let max = -Infinity;
  candies.forEach(c => {
    max = Math.max(c, max);
  })

  return candies.map(c => {
    if (c + extraCandies >= max) {
      return true;
    }

    return false;
  })
};