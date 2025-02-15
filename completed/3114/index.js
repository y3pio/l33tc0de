/**
 * @param {string} s
 * @return {string}
 */
var findLatestTime = function(s) {
  let h1 = s[0]
  let h2 = s[1]
  let m1 = s[3]
  let m2 = s[4]

  // ??:MM -> 12:MM
  if (h1 === '?' && h2 === '?') {
    h1 = 1;
    h2 = 1;
  } else if (h1 === '?') {
    // ?H -> ex. ?0, ?2 => 10 or 12
    //       ex. ?3, 09 => cannot be 13 or 19 since 12 hr format, so default to 03, 09
    h1 = parseInt(h2) < 2 ? 1 : 0
  } else if (h2 === '?') {
    // Same as h1 === '?' case above but inverse
    h2 = parseInt(h1) === 0 ? 9 : 1
  }

  if (m1 === '?') {
    m1 = 5
  }

  if (m2 === '?') {
    m2 = 9
  }

  return `${h1}${h2}:${m1}${m2}`
};