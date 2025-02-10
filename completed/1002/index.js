/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
  let charMap = new Map();
  words[0].split('').forEach(c => {
    if (charMap.has(c)) {
      charMap.set(c, charMap.get(c) + 1)
    } else {
      charMap.set(c, 1);
    }
  })

  for(let i=1; i<words.length; i++) {
    let currCharMap = new Map();
    words[i].split('').forEach(c => {
      if (currCharMap.has(c)) {
        currCharMap.set(c, currCharMap.get(c) + 1)
      } else {
        currCharMap.set(c, 1);
      }
    })

    let newCharMap = new Map();
    currCharMap.forEach((val, key) => {
      if (charMap.has(key)) {
        newCharMap.set(key, Math.min(val, charMap.get(key)))
      }
    })
    charMap = newCharMap;
  }

  const result = [];
  charMap.forEach((val, key) => {
    for(i=0; i<val; i++) {
      result.push(key);
    }
  })

  return result;
};