/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function(n, k) {
  let position = 0; // Start at child 0
  let direction = 1; // 1 for right, -1 for left

  for (let i = 0; i < k; i++) {
    position += direction;

    // Reverse direction if the ball reaches the ends
    if (position === 0 || position === n - 1) {
      direction *= -1;
    }
  }

  return position;
};