// 汉诺塔问题
// 一些圆盘，三根柱子
// 起始柱子,辅助柱子,目标柱子
// 递归的思想： 把n个盘子看成n-1+ 1，
// n-1 = n-2 +1, .... 最后到最简单的移动2个盘子的问题
// 2的N次方
function towerOfHanoi(n, source, destination, auxiliary) {
  if (n === 1) {
    console.log(
      'move disk 1 from source ',
      source,
      ' to destination',
      destination
    );
    return;
  }
  towerOfHanoi(n - 1, source, auxiliary, destination);
  console.log('move disk ', n, 'from', source, 'to destination ', destination);
  towerOfHanoi(n - 1, auxiliary, destination, source);
}

towerOfHanoi(2, 'aaa', 'ccc', 'bbb');
