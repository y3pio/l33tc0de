/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
  const cleanNum = number.replaceAll(' ', '').replaceAll('-', '')

  let group = ''
  const result = []
  for (let i=0; i<cleanNum.length; i++) {
    group += cleanNum[i];

    if (group.length === 3) {
      result.push(group);
      group = '';
    }
  }

  if (group.length === 1) {
    let last = result.pop();
    last += group;
    const newLast = `${last[0]}${last[1]}-${last[2]}${last[3]}`;
    result.push(newLast);
  } else if (group.length === 2) {
    result.push(group)
  };

  return result.join('-')

};