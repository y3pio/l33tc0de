/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let validPlaces = 0;
  for (let i=0; i<flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      const left = flowerbed[i-1] || 0
      const right = flowerbed[i+1] || 0;
      if (left === 0 && right === 0) {
        validPlaces++;
        i+=1;
      }
    }
  }
  return validPlaces >= n;
};