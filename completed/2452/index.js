/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function(queries, dictionary) {
  const canEdit = (q => {
    if (dictionary.includes(q)) {
      return true;
    }

    const withinDistance = dictionary.some(word => {
      let diff = 0;
      for (let i=0; i<word.length; i++) {
        if (word[i] !== q[i]) {
          diff ++;
        }
      }

      return diff <= 2;
    })

    return withinDistance;
  })

  return queries.filter(canEdit)
};