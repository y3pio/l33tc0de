/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const comboSteps = new Map();

  if (n <= 2) {
    return n;
  }

  comboSteps.set(1, 1);
  comboSteps.set(2, 2);

  for (let i=3; i<=n; i++) {
    const newCombo = comboSteps.get(i-1) + comboSteps.get(i-2);
    comboSteps.set(i, newCombo);
  }

  return comboSteps.get(n);
};