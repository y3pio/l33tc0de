/**
 * @param {string[]} message
 * @param {string[]} bannedWords
 * @return {boolean}
 */
var reportSpam = function(message, bannedWords) {
  let spamCount = 0;
  const bannedSet = new Set(bannedWords)

  for(let i=0; i<message.length; i++) {
    if (bannedSet.has(message[i])) {
      spamCount++;
    }

    if (spamCount >= 2) {
      return true;
    }
  }

  return false;
};