/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
  cost.sort((a,b) => a-b);

  let total = 0;
  let currentBought = 0;
  while(cost.length > 0) {
    const curr = cost.pop();
    currentBought++;
    if (currentBought % 2 === 0) {
      // One free.
      cost.pop();
    }
    total += curr;
  }

  return total;
};