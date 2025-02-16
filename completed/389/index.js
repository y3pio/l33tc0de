/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const seen = new Map();
  for (const c of t) {
    if (seen.has(c)) {
      seen.set(c, seen.get(c) + 1)
    } else {
      seen.set(c, 1)
    }
  }

  for (const c of s) {
    const newCount = seen.get(c) - 1;
    if (newCount === 0) {
      seen.delete(c)
    } else {
      seen.set(c, newCount)

    }
  }

  return seen.keys().next().value;
};