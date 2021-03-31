/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  let map = {
    ')': '(',
    ']': '[',
    '}': '{',
  }

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
      case '{':
      case '{':
        stack.push(s[i]);
        break;
      case '}':
      case ']':
      case ')':
        stack.pop() !== s[i] ? return false : continue
      default:
        break;
    }
    
  }

  return !stack.length;
};