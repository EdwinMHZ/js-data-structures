/*
    I solved this problem in leetcode
    https://leetcode.com/problems/3sum/
*/

function threeSum(nums: number[]): number[][] {
  let i = 0;
  let j = 1;
  let k = nums.length - 1;

  nums = nums.sort((a, b) => a - b);
  const result = [];
  //console.log("nums", nums)
  let prevJ = null;
  let prevK = null;
  // [ -3, -2, -2, 0, 0 ]
  while (i < k) {
    /* console.log("i", i)
        console.log("j", j)
        console.log("k", k) */
    let sum = null;
    if (i != j && i != k && j != k) {
      sum = nums[i] + nums[j] + nums[k];
    }
    //console.log("sum", sum)
    if (sum === 0 && prevJ !== nums[j] && prevK !== nums[k]) {
      const triplet = [nums[i], nums[j], nums[k]];
      result.push(triplet);
      prevJ = nums[j];
      prevK = nums[k];
      j++;
    } else if (sum < 0) {
      j++;
    } else {
      k--;
    }

    if (j === k) {
      const prevI = i;
      //console.log("prevI", i)
      i++;
      //console.log("newI", i)
      // is duplicate
      while (nums[prevI] === nums[i]) {
        //console.log("duplicated, increasing")
        i++;
      }
      //console.log("i updated", i)
      j = i + 1;
      k = nums.length - 1;
      prevJ = null;
      prevK = null;
    }
    //console.log("")
  }
  return result;
}
