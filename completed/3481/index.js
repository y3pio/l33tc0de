/**
 * @param {string[][]} replacements
 * @param {string} text
 * @return {string}
 */
var applySubstitutions = function(replacements, text) {
  const rMap = new Map();
  replacements.forEach(e => {
    const [key, val] = e;
    rMap.set(key, val)
  })

  const textArr = text.split('')
    .filter(c => c !== '%')
    .map(c => {
      if (rMap.has(c)) {
        return rMap.get(c)
      }

      return c;
    });

  const result = textArr.join('');

  if (result.includes('%')) {
    return applySubstitutions(replacements, result)
  }

  return result;
};