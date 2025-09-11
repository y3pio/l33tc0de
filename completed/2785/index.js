/**
 * @param {string} s
 * @return {string}
 */
const VOWELS = ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U']
var sortVowels = function(s) {
    const sVowels = [];

    for (let i=0; i<s.length; i++) {
        const c = s[i];
        if (VOWELS.includes(c)) {
            sVowels.push(c)
        }
    }

    sVowels.sort((a,b) => a < b ? -1 : 0)
    let vPtr = 0;
    const sArr = s.split('');
    for (let i=0; i<sArr.length; i++) {
        const c = sArr[i];
        if (VOWELS.includes(c)) {
            sArr[i] = sVowels[vPtr];
            vPtr++;
        }
    }

    return sArr.join('');
};
