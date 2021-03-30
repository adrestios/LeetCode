/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let res = [];
  for(let i = 0; i < ops.length; i++) {
      switch(ops[i]) {
          case '+': 
              res.push(res[res.length - 1] + res[res.length - 2]);
              break;
          case 'D':
              res.push(res[res.length - 1] * 2);
              break;
          case 'C':
              res.pop();
              break;
          default: 
              res.push(Number(ops[i]));
      }
  }
  console.log(res)
  return res.reduce((acc, cur) => {
      return  acc + cur;
  }, 0)
};