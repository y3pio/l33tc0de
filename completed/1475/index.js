/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
  let result = []

  for (let i=0; i<prices.length; i++) {
    let currentPrice = prices[i];

    for (j=i+1; j<prices.length; j++) {
      if (prices[j] <= currentPrice ) {
        currentPrice -= prices[j];
        break;
      }
    }

    result.push(currentPrice)
  }

  return result;
};