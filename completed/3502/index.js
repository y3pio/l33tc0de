/**
 * @param {number[]} cost
 * @return {number[]}
 */
var minCosts = function(cost) {
  const result = [];
  let curr = cost[0];
  for (let i=0; i<cost.length; i++) {
    if (cost[i] < curr) {
      curr = cost[i];
    }

    result.push(curr)
  }

  return result;
};