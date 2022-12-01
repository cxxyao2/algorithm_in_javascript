// 时间复杂度O(N2)  空间复杂度 O（N2)
// 搜索消耗的空间复杂度为搜索树最大深度乘上字符串最大长度
//  TODO 左右括号成对 {}{}  {{}} 三对 {}{}{}  {}{{}}   {{}{}} {{{}}}
// 逐个字符添加， 最后左括号N个，右括号N个
// 如果右括号数等于左括号数，是一种成功组合
// 如果左括号数没有超过N
// 如果左多余右,那么可以加一个左或者一个右,到下一层
// 如果左数量少于等于右，那么只能加左括号,

// 记录3个值, 最后字符串，还需要加的左括号数量, 还需要加的右括号数量
// resultArr 所有组合
function helper(resultArr, result, left, right) {
  if (left === 0 && right === 0) {
    resultArr.push(result);
    return;
  }

  if (left > 0) {
    helper(resultArr, result + '(', left - 1, right);
  }

  if (right > 0 && left < right) {
    helper(resultArr, result + ')', left, right - 1);
  }
}

let tempString = new String('');
let bracketArr = [];
helper(bracketArr, tempString, 6, 6);
let len = bracketArr.length;
for (let i = 0; i < len; i++) {
  console.log(bracketArr[i]);
}
