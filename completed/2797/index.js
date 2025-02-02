/**
 * @param {Function} fn
 * @param {Array} args
 * @return {Function}
 */
var partial = function(fn, args) {

  return function(...restArgs) {
    let replace = 0;
    const result = [];
    for (let i=0; i<args.length; i++) {
      if (args[i] === '_') {
        result.push(restArgs[replace])
        replace++;
      } else {
        result.push(args[i])
      }
    }

    while(replace < restArgs.length) {
      result.push(restArgs[replace]);
      replace++;
    }

    return fn(...result)
  }
};