/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
  let netShift = 0;

  // Calculate the net shift
  for (const [direction, amount] of shift) {
    netShift += direction === 0 ? -amount : amount;
  }

  // Optimize the shift
  const length = s.length;
  netShift %= length;

  // Apply the shift
  if (netShift > 0) {
    // Right shift
    return s.slice(-netShift) + s.slice(0, -netShift);
  } else if (netShift < 0) {
    // Left shift
    return s.slice(-netShift) + s.slice(0, -netShift);
  }

  return s; // No shift
};