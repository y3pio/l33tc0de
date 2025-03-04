/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
  prices.sort((a,b) => b-a);

  let cost = 0;
  cost += prices.pop();
  cost += prices.pop();

  return cost > money ? money : money - cost;
};