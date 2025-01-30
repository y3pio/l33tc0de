/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
  let lastRes = pref[0];
  const result = [pref[0]];
  for (let i=1; i<pref.length; i++) {
    const nextRes = lastRes ^ pref[i];
    result.push(nextRes);
    lastRes = pref[i];
  }

  return result;
};