/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  let W = Math.floor(Math.sqrt(area)); // Start with the largest possible width
  while (area % W !== 0) { // Find the largest factor of the area
    W--;
  }
  let L = area / W; // Calculate the corresponding length
  return [L, W]; // Return the dimensions
};