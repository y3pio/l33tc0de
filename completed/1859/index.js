console.clear();

const s1 = "is2 sentence4 This1 a3";
const s2 = "Myself2 Me1 I4 and3";

var sortSentence = function(s) {
  const result = [];

  s.split(' ').forEach(w => {
    result[parseInt(w[w.length-1])] = w.substring(0, w.length-1);
  })

  return result.filter(e => e).join(' ');
};

console.log(sortSentence(s2))

// TODO: Can also do a linear scan.