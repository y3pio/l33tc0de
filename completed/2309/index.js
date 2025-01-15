/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
  const seenSet = new Set();
  for(let i=0; i<s.length; i++) {
    seenSet.add(s[i]);
  }

  let candidate = undefined;

  for(let i=0; i<s.length; i++) {
    const char = s[i];
    if (char === char.toLowerCase() && seenSet.has(char.toUpperCase())) {
      if (!candidate) {
        candidate = char.toUpperCase();
      } else {
        if (char.toUpperCase() > candidate) {
          candidate = char.toUpperCase();
        }
      }
    }
  }

  return candidate || "";
};