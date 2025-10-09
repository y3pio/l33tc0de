/**
 * @param {string[]} words
 * @return {number}
 */
var maxDistance = function(words) {
    let max = 0;

    for (let i=0; i<words.length; i++) {
        for (let j=i+1; j<words.length; j++) {
            if (words[i] !== words[j]) {
                max = Math.max(max, Math.abs(i-j) + 1)
            }
        }
    }

    return max;
};
