// 插入排序
// 最好情况 时间复杂度 O(N)；最坏 时间复杂度 O(N2)
// 空间复杂度 O(1)
// 类似打牌, 把一个新的元素插入到已经排序的数组中,
// 第一轮，把第二个元素与第一个比,如果第二更小,就交换位置
// 第二轮, 把第三个元素与第二比,如果小,交换位置;再把第二与第一比,如果还小，就继续交换.
// 。。。
// 第N轮, 第N个元素与前面元素依次比较,保证前面元素比它小
// 如果已经排序,那么只需要N-1次比较; 如果全部逆序,那么需要N*(N-1）次比较
function insertSort(a) {
  let len = a.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j > 0; j--) {
      if (a[j - 1] > a[j]) {
        swap(a, j, j - 1);
      } else {
        break;
      }
    }
  }
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arrNumber = [12, 11, 10, 9, 8, 7, 6, 5];
let len = arrNumber.length - 1;
let timeLabel;
console.time(timeLabel);
insertSort(arrNumber, 0, len);
console.timeEnd(timeLabel);
arrNumber.forEach((ele) => {
  console.log(ele);
});
