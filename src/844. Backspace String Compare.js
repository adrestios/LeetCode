/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  function transfer(string) {
    let stack = string.split('');
    let res = [];
    for (let i = 0; i < stack.length; i++) {
      if (res[i] === '#') {
        res.pop();
      } else {
        res.push(stack[i]);
      }
    }
    return res.join('');
  }
  let s = transfer(S);
  let t = transfer(T);
  return s === t
};