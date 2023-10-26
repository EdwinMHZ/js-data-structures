/*
    Write a function called findLongestSubstring, which accepts a string and returns 
    the length of the longest substring with all distinct characters.
    
    Leetcode problem https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/
*/

function findLongestSubstring(str: string) {
  // add whatever parameters you deem necessary - good luck!
  const strSet = new Set();
  let left = 0;
  let res = 0;
  for (let right = 0; right < str.length; right++) {
    while (strSet.has(str.charAt(right))) {
      strSet.delete(str.charAt(left));
      left++;
    }
    strSet.add(str.charAt(right));
    res = Math.max(res, right - left + 1);
  }
  return res;
}
