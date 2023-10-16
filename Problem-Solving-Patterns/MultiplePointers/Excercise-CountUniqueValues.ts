/*
    Implement a function called countUniqueValues,
    which accepts a sorted array, and counts the
    unique values, in the array. There can be negative
    numbers in the array, but it wll always be sorted

*/

// Examples
// countUniqueValues([1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,14]) // 7
// countUniqueValues([]) // 0

// My solution was to use a map which works
// Time complexity O(n)
// Space complexity O(n)
function countUniqueValues(sortedArr: number[]) {
  const mapValues = new Map();

  sortedArr.forEach((element) => {
    if (!mapValues.get(element)) {
      mapValues.set(element, 1);
    }
  });

  return [...mapValues.keys()].length;
}

/* console.log("Result", countUniqueValues([1, 1, 1, 1, 2]));
console.log("Result", countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 14]));
console.log("Result", countUniqueValues([])); */

// Solution using the multiple pointers approach
// Time complexity O(n)
// Space complexity O(1)
function countUniqueValues2(sortedArr: number[]) {
  let i = 0;
  let j = 1;
  while (j < sortedArr.length) {
    /* console.log("i", i);
    console.log("j", j);
    console.log("arrI", sortedArr[i]);
    console.log("arrJ", sortedArr[j]);
    console.log(""); */

    if (sortedArr[i] === sortedArr[j]) {
      j++;
    } else {
      i++;
      sortedArr[i] = sortedArr[j];
    }
  }
  return i > 0 ? i + 1 : 0;
}

console.log("Result", countUniqueValues2([1, 1, 1, 1, 2]));
console.log("Result", countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 14]));
console.log("Result", countUniqueValues2([]));
