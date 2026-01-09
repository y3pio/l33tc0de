/**
 * @param {string} caption
 * @return {string}
 */
var generateTag = function(caption) {
  const firstChar = caption[0]
  caption = caption.replace(firstChar, firstChar.toLowerCase())

  const joinedCaption = '#' + caption.split(' ')
    .filter(e => !!e)
    .map((e, i) => {
      e = e.toLowerCase();
      if (i > 0) {
        const first = e[0];
        e = e.replace(first, first.toUpperCase())
      }

      return e;
    })
    .join('');

  if (joinedCaption.length > 100) {
    return joinedCaption.substring(0, 100);
  }

  return joinedCaption;
};