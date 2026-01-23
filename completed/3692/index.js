/**
 * @param {string} s
 * @return {string}
 */
var majorityFrequencyGroup = function(s) {
    const seen = new Map();
    for (c of s) {
        seen.set(c, (seen.get(c) || 0) + 1);
    }

    const count = new Map();
    seen.forEach((v, k) => {
        count.set(v, (count.get(v) || '') + k);
    })

    let max = {
        v: '',
        k: undefined
    };
    count.forEach((v, k) => {
        if (v.length > max.v.length) {
            max.v = v;
            max.k = k;
        } else if (v.length === max.v.length && k > max.k) {
            max.v = v;
            max.k = k;
        }
    })

    return max.v;
};