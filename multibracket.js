// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// 用栈的概念,后进先出 push, pop
// ([]) true
// ([()[]()])() true

// symbols 为传入的字符串
function parenthesesCheck(symbols) {
  const leftArray = [];
  // left
  const opens = '([{';
  // right
  const closes = ')]}';

  let balanced = true;
  let index = 0;
  let symbol;
  let top;

  while (index < symbols.length && balanced) {
    symbol = symbols[index];

    // left 入栈待匹配
    if (opens.indexOf(symbol) >= 0) {
      leftArray.push(symbol);
    } else if (leftArray.length === 0) {
      balanced = false;
    } else {
      // 遇到右括号,开始匹配
      top = leftArray.pop();
      if (!(opens.indexOf(top) === closes.indexOf(symbol))) {
        balanced = false;
      }
    }

    index++;
  }

  // 成功匹配所有,没有多余的左括号
  return balanced && leftArray.length === 0;
}

console.log('{[()]}', parenthesesCheck('{[()]}'));
console.log('{[()]', parenthesesCheck('{[()]'));
