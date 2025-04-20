/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
  const map = new Map();

  knowledge.forEach(k => {
    const [key, val] = k;
    map.set(key, val)
  })

  let i=0;
  let result = ''
  while(i < s.length) {
    let c = s[i]
    if (c === '(') {
      let key = ''
      i++;
      while(s[i] !== ')') {
        key += s[i];
        i++
      }

      if (map.has(key)) {
        result += map.get(key)
      } else {
        result += '?'
      }
      i++;
    } else {
      result += c;
      i++;
    }
  }

  return result;
};