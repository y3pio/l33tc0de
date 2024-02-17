console.clear();

const s = '011101'

const countZeros = (s) => {
  let score = 0;
  for (let i=0; i<s.length; i++) {
    if (s[i] === '0') {
      score++;
    }
  }

  return score;
}


const countOnes = (s) => {
  let score = 0;
  for (let i=0; i<s.length; i++) {
    if (s[i] === '1') {
      score++;
    }
  }

  return score;
}

const maxScore = (s) => {

}

console.log(maxScore(s));