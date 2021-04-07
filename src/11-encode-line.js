/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let prevLetter = '';
  let result = '';
  let counter = 0;
  str.split('').forEach((letter, index) => {
    if (letter !== prevLetter) {
      result += (counter > 1 ? counter : '') + prevLetter;
      counter = 0;
    }
    counter++;
    if (index === str.length - 1) {
      result += (counter > 1 ? counter : '') + letter;
    }
    prevLetter = letter;
  });
  return result;
}

module.exports = encodeLine;
