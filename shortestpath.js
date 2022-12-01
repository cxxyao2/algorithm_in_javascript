// 时间复杂度 O(N3) 空间复杂度O(N2)
// 求N个点之间的任意两点最短距离
// 建立2个N*N的辅助矩阵来存储信息
// 每次考虑加一个中转点vk,对路径的影响
// 两个i行 j 列的数组： 1个记录各点之间最短路径， 1个记录经过的结点
function getShortestPath(a, path) {
  let n = a.length;
  for (let k = 0; k < n; k++) {
    // 中转点
    for (let i = 0; i < n; i++) {
      // 遍历整个矩阵, i是行, j是列
      for (let j = 0; j < n; j++) {
        if (a[i][j] > a[i][k] + a[k][j]) {
          a[i][j] = a[i][k] + a[k][j];
          path[i][j] = k;
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    // 遍历整个矩阵, i是行, j是列
    for (let j = 0; j < n; j++) {
      console.log(`arr ${i} ${j} length is `, a[i][j]);
      console.log(`path ${i} ${j} node is `, path[i][j]);
    }
  }
}

// 打印路径长度
function calcLength(lengthArr, noteArr, n, m, total) {
  if (noteArr[n][m] === -1) {
    total.pathlen = total.pathlen + lengthArr[n][m];
    return;
  }
  calcLength(lengthArr, noteArr, n, noteArr[n][m], total);
  calcLength(lengthArr, noteArr, noteArr[n][m], m, total);

  // if (noteArr[n][m] !== -1) {
  //   calcLength(lengthArr, noteArr, n, noteArr[n][m], total);
  //   calcLength(lengthArr, noteArr, noteArr[n][m], m, total);
  // } else {
  //   total.pathlen = total.pathlen + lengthArr[n][m];
  // }
}

// 打印路径包含的节点
function printNotes(lengthArr, noteArr, n, m, notes) {
  if (noteArr[n][m] !== -1) {
    printNotes(lengthArr, noteArr, n, noteArr[n][m], notes);
    printNotes(lengthArr, noteArr, noteArr[n][m], m, notes);
  } else {
    notes.pathstr =
      notes.pathstr + ', ' + n.toString() + ' , ' + m.toString() + ', ';
  }
}

const initLengthArr = [
  [0, 100, 1, 100, 10],
  [100, 0, 100, 1, 5],
  [100, 1, 0, 100, 7],
  [100, 100, 100, 0, 1],
  [100, 100, 100, 100, 0],
];
const initPathArr = [
  [-1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1],
];

getShortestPath(initLengthArr, initPathArr);

const result = {
  pathlen: 0,
  pathstr: '',
};

calcLength(initLengthArr, initPathArr, 1, 4, result);

printNotes(initLengthArr, initPathArr, 1, 4, result);
if (result.pathstr.length > 0) {
  let tempArra = result.pathstr
    .split(',')
    .map((ele) => parseInt(ele))
    .filter((ele) => ele >= 0);
  let newSet = new Set(tempArra);
  console.log('set is ', newSet);
}
console.log('2 to 5 path is ', result);
