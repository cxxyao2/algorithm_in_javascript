// space complicity: O(1)
// time complicity: O(n2)
// worst case:
// n*(n-1) /2
// 3 2 1  --> 移动3次,变成 1 2 3
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) swap(arr, i, j);
    }
  }
  return arr;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arrNumber = [1, 4, 7, 2, 8];
bubbleSort(arrNumber);
arrNumber.forEach((ele) => {
  console.log(ele);
});
