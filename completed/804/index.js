/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const morseCode = [
    ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---",
    "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-",
    "..-", "...-", ".--", "-..-", "-.--", "--.."
  ];

  const transformations = new Set();

  for (const word of words) {
    let transformation = '';
    for (const char of word) {
      transformation += morseCode[char.charCodeAt(0) - 97];
    }
    transformations.add(transformation);
  }

  return transformations.size;
};