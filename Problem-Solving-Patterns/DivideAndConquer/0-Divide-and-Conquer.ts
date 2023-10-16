/* 
    This pattern involves dividing a data set
    into smaller chunks and then repeating a 
    process with a subset of data

    This pattern can tremendously decrease
    time complexity
*/

// Example(Classic Binary Search)

// Given a sorted array of integers, write a function
// called binarySearch, that accepts a value and returns the
// index where the value passed to the function is located.
// If the value is not found, return -1

function binarySearch(arr: number[], val: number) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];
    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}
