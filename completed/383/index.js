/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const noteMap = new Map();

  for (let i=0; i<ransomNote.length; i++) {
    const char = ransomNote[i];
    if (noteMap.has(char)) {
      noteMap.set(char, noteMap.get(char) + 1);
    } else {
      noteMap.set(char, 1);
    }
  }

  for (let i=0; i<magazine.length; i++) {
    const char = magazine[i];
    if (noteMap.has(char)) {
      const newCount = noteMap.get(char) - 1;
      if (newCount === 0) {
        noteMap.delete(char);
      } else {
        noteMap.set(char, newCount);
      }
    }

    if (noteMap.size === 0) {
      return true;
    }
  }

  return false;
};