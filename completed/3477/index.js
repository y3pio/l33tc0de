/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
  let leftOverCount = 0;
  for (let i=0; i<fruits.length; i++) {
    const currentFruits = fruits[i];
    let placed = false;

    for(let j=0; j<baskets.length; j++) {
      const capicity = baskets[j];
      if (capicity !== -1 && capicity >= currentFruits) {
        baskets[j] = -1
        placed = true;
        break;
      }
    }

    if (!placed) {
      leftOverCount++;
    }
  }

  return leftOverCount
};