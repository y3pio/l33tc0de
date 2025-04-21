/**
 * @param {string} compressed
 * @return {string}
 */
var betterCompression = function(compressed) {
  const frequencyMap = new Map();
  let i = 0;

  while (i < compressed.length) {
    let char = compressed[i];
    i++;
    let freq = 0;

    // Parse the frequency (accumulate digits)
    while (i < compressed.length && compressed[i] >= '0' && compressed[i] <= '9') {
      freq = freq * 10 + (compressed[i].charCodeAt(0) - '0'.charCodeAt(0));
      i++;
    }

    // Update the frequency map
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + freq);
  }

  // Sort characters alphabetically and construct the result
  const sortedChars = Array.from(frequencyMap.keys()).sort();
  let result = '';
  for (const char of sortedChars) {
    result += char + frequencyMap.get(char);
  }

  return result;
};