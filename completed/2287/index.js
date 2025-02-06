/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
  const seenMap = new Map();
  const targetMap = new Map();
  const targetArray = target.split('');
  targetArray.forEach(c => {
    seenMap.set(c, 0);

    if (targetMap.has(c)) {
      targetMap.set(c, targetMap.get(c) + 1)
    } else {
      targetMap.set(c, 1);
    }
  })

  for (let i=0; i<s.length; i++) {
    const char = s[i];
    if (targetArray.includes(char)) {
      seenMap.set(char, seenMap.get(char) + 1);
    }
  }

  let min = Infinity;

  targetMap.forEach((val, key) => {
    const count = Math.floor(seenMap.get(key) / val);
    min = Math.min(count, min);
  })

  return min;
};