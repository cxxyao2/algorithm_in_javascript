// 3者取中间值,改进型快速排序，防止O(n2)的出现

function quickSort(arr, left, right) {
  let pivotIndex = partition(arr, left, right);
  if (left < right) {
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
}

function partition(arr, left, right) {
  // 取left, medium, right 中间值
  let medium = Math.ceil(left + right);
  let average = (arr[left] + arr[medium] + arr[right]) / 3;
  // 求出最小的绝对值 和相对索引,就是中间数
  let pivotIndex = left;
  if (Math.abs(arr[pivotIndex] - average) > Math.abs(arr[medium] - average)) {
    pivotIndex = medium;
  }
  if (Math.abs(arr[pivotIndex] - average) > Math.abs(arr[right] - average)) {
    pivotIndex = right;
  }
  swap(arr, left, pivotIndex);

  let pivot = left;
  let index = left + 1;
  for (let i = left + 1; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// const arrNumber = [12, 4, 7, 2, 8, 11, 3, 1];
const arrNumber = [12, 11, 10, 9, 8, 7, 6, 5];
let len = arrNumber.length - 1;
let timeLabel;
console.time(timeLabel);
quickSort(arrNumber, 0, len);
console.timeEnd(timeLabel);
arrNumber.forEach((ele) => {
  console.log(ele);
});
