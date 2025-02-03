/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
  if (word.length < 3) {
    return false;
  }

  const validDigits = '0123456789';
  const validAlpha = 'abcdefghijklmnopqrstuvwxyz';
  const vowels = 'aeiou'.split('');

  const validChars = [
    ...validDigits.split(''),
    ...validAlpha.split(''),
    ...validAlpha.toUpperCase().split(''),
  ]

  let hasVowels = false;
  let hasConsonant = false;

  for(let i=0; i<word.length; i++) {
    const char = word[i].toLowerCase();

    if (!hasVowels && vowels.includes(char)) {
      hasVowels = true;
    }

    if (!hasConsonant && !vowels.includes(char) && validAlpha.split('').includes(char)) {
      hasConsonant = true;
    }

    if (!validChars.includes(char)) {
      return false;
    }
  }
  return hasVowels && hasConsonant;
};