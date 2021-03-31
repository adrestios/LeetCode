/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  let stack = [];
  let res = '';
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      if (stack.length > 0) {
        res += S[i];
      }
      stack.push(S[i]);
      
    } else {
      stack.pop();
      if (stack.length >0) {
        res += S[i]
      }
    }
  }
  return res;
};