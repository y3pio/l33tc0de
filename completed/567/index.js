/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const areMapsEqual = (m1, m2) => {
  let isEqual = true;
  m1.forEach((val, key) => {
    if (m2.get(key) !== val) {
      isEqual = false;
      return;
    }
  })

  return isEqual;
}
var checkInclusion = function(s1, s2) {
  let window = s1.length;
  const m1 = new Map();

  for(let i=0; i<s1.length; i++) {
    const c = s1[i]
    if (!m1.has(c)) {
      m1.set(c,1)
    } else {
      m1.set(c, m1.get(c) + 1)
    }
  }

  const m2 = new Map();

  for (let i=0; i<window; i++) {
    const c = s2[i]
    if (!m2.has(c)) {
      m2.set(c,1)
    } else {
      m2.set(c, m2.get(c) + 1)
    }
  }

  if (areMapsEqual(m1,m2)) {
    return true;
  }

  for (let i=window; i<s2.length; i++) {
    const c = s2[i]
    if (!m2.has(c)) {
      m2.set(c,1)
    } else {
      m2.set(c, m2.get(c) + 1)
    }

    const prev = s2[i-window]
    if (m2.get(prev) === 1) {
      m2.delete(prev)
    } else {
      m2.set(prev, m2.get(prev) -1)
    }

    if (areMapsEqual(m1,m2)) {
      return true;
    }
  }

  return false;
};