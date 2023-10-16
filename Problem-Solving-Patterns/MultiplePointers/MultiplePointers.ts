/*
    Creating pointers or values that correspond to and
    index or position and move towards the beginning,
    end or middle based on a certain condition

    Very efficient for solving problems
    with minimal space complexity as well
*/

// Example
// Write a function called sumZero, which accepts a sorted
// array of integers. The function should find the first pair
// where the sum is 0. Return an array than includes both
// values that sum to zero or undefined if a pair does not exist

// sumZero([-3,-2,-1,0,1,2,3]) [-3,3]
// sumZero([-2,0,1,3]) undefined
// sumZero([1,2,3]) undefined

// My solution(It's not always correct)
// Time Complexity O(n)
// Space Complexity O(1)
function sumZero(sortedArr: number[]) {
  const len = sortedArr.length;
  let index = 0;
  let reverseIndex = len - 1;
  const result: number[] = [];
  while (index < reverseIndex) {
    if (sortedArr[index] + sortedArr[reverseIndex] === 0) {
      result.push(sortedArr[index], sortedArr[reverseIndex]);
      return result;
    }
    index++;
    reverseIndex--;
  }
  return undefined;
}

console.log("Result:", sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log("Result:", sumZero([-2, 0, 1, 3]));
console.log("Result:", sumZero([1, 2, 3]));
console.log("Result:", sumZero([-30, -20, -1, 0, 1, 2, 3]));

// Naive Solution
// Time Complexity O(n^2)
// Space Complexity O(1)
function naiveSolution(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// Refactor solution
// Time Complexity O(n)
// Space Complexity O(1)
function sumZeroRefactor(sortedArr: number[]) {
  let left = 0;
  let right = sortedArr.length - 1;
  while (left < right) {
    const sum = sortedArr[left] + sortedArr[right];
    if (sum === 0) {
      return [sortedArr[left], sortedArr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return undefined;
}
