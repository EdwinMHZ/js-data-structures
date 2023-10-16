/*
    This pattern involves creating a
    window which can either be an array or
    number from one position to another

    Depending on a certain condition, the 
    window either increases or closes(and a
    new window is created).

    Very useful for keeping track of a subset
    of data in an array/string etc.
*/

// Example
// Write a function called maxSubarraySum which accepts
// an array of integers and a number called n. The function
// should calculate the maximum sum of n consecutive elements
// in the array

// maxSubarraySum([1,2,5,2,8,1,5], 2) // 10
// maxSubarraySum([1,2,5,2,8,1,5], 4) // 17
// maxSubarraySum([1,2,5,2,8], 1) // 8
// maxSubarraySum([], 4) // null

// My solution was not the best due to the time complexity
// Time complexity O(n^2)
function maxSubarraySum(arr: number[], num: number) {
  // create the initial window
  if (arr.length === 0) {
    return null;
  }
  let maxSum = -99999999999;
  //loop the array, and update when we get a new max sum
  arr.forEach((_, index) => {
    let sum = 0;
    for (let i = index; i < index + num; i++) {
      sum += arr[i];
    }
    if (sum > maxSum) {
      maxSum = sum;
    }
  });
  return maxSum;
}

console.log("Result", maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log("Result", maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log("Result", maxSubarraySum([1, 2, 5, 2, 8], 1));

// Refactor solution(Using Sliding Window)
// Time complexity O(n)
function maxSubarraySumRefactored(arr: number[], num: number) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length === 0) {
    return null;
  }
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log("Result", maxSubarraySumRefactored([1, 2, 5, 2, 8, 1, 5], 2));
console.log("Result", maxSubarraySumRefactored([1, 2, 5, 2, 8, 1, 5], 4));
console.log("Result", maxSubarraySumRefactored([1, 2, 5, 2, 8], 1));
