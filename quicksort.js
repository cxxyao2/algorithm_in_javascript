// space complicity: O(1)
// time complicity: O(nlogn)
// what is recursion: Recursion is an approach to solving problems
// using a function that calls itself as a subroutine.
// stack:用于存放函数的参数,返回地址. primitive values and references
// heap: 存放function and object

//a quicksort is an implementation of the strategy: divide and conquer

// It starts by partitioning the input into two chunks:
//  specifically speaking
// To be specific, it chooses a "pivot" value, and partition the input into two chunks, one chunk includes those less than the pivot value
// the other includes  those bigger than the pivot value.

// after the first partitioning, it recursively sorts
// each of those  chunks by the same logic...... 
// until each chunk is down to one element. (until each chunk includes only one element)


// by definition, since the input isn't sorted, to partition it like that,
// it has to look at every item in the input. so that's an O(n) operation






// after it has partitioned the input in the first time, it recursively sorts
// each of those "chunks" by the same logic.
// until each chunk is down to one element.

// we obviously end up doing O(N) partition levels before each partition is down to one element.


// at the second level, we have two partitioning steps, but
// between the two, they look at every input item.




// by definition, since the input isn't sorted, to partition it like that,
// it has to look at every item in the input. so that's an O(n) operation




// -- in ideal case
// -- we hope each partitioning step breaks the input in half.
// let's assume perfect partitioning,so we get exact halves  every time
// in this case, the number of times we can break it in half
// will be the base-2 logarithm (对数) of the number of input.
// give 128 input, we get partitions size of 64,32,16,8,4,2 and 1
// That's 7 levels of partitioning ( log2（128） === 7 )

// we have log(N) partition "levels". and each level has to visit
// all N inputs. so log(N) levels times N operations per level
// gives up O(N logN) overall complexity.

// ---worst case
// the worst case is a pivot that's actually the smallest or largest element
// in the input. In this case, we do a O(N) partitioning level,
// but instead of getting two halves of equal size, we've ended up with one partition of one element
// the other partition of N-1 elements. If that happens for every level of partitions,
// we obviously end up doing O(N) partition levels before each partition is down to one element.

// . in average log n partitioning operations and each partitioning takes O(n) operations.
// O(N2)

// 快速排序对数量多,无序的情况下好 ; 对数据趋近有序情况下,用其他排序算法

function quickSort(arr, left, right) {
  let pivotIndex = partition(arr, left, right);
  if (left < right) {
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
}

function partition(arr, left, right) {
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

//const arrNumber = [12, 4, 7, 2, 8, 11, 3, 1];
const arrNumber = [12, 11, 10, 9, 8, 7, 6, 5];
let len = arrNumber.length - 1;
let timeLabel;
console.time(timeLabel);
quickSort(arrNumber, 0, len);
console.timeEnd(timeLabel);
arrNumber.forEach((ele) => {
  console.log(ele);
});
