/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function(n) {
  const length = n.length;
  const candidates = new Set([
    BigInt(Math.pow(10, length - 1) - 1), // 999...999 (one less digit)
    BigInt(Math.pow(10, length) + 1)     // 1000...0001 (one more digit)
  ]);

  const prefix = BigInt(n.slice(0, Math.ceil(length / 2)));
  for (let i = -1; i <= 1; i++) {
    const candidate = String(prefix + BigInt(i));
    const palindromic = candidate + candidate.slice(0, Math.floor(length / 2)).split('').reverse().join('');
    candidates.add(BigInt(palindromic));
  }

  const num = BigInt(n);
  let closest = null;
  candidates.forEach(candidate => {
    if (candidate !== num) {
      if (closest === null ||
        (candidate - num < 0n ? -(candidate - num) : candidate - num) < (closest - num < 0n ? -(closest - num) : closest - num) ||
        ((candidate - num < 0n ? -(candidate - num) : candidate - num) === (closest - num < 0n ? -(closest - num) : closest - num) && candidate < closest)) {
        closest = candidate;
      }
    }
  });

  return closest.toString();
};