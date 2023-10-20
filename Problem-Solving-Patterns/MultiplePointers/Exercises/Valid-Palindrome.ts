/*
    I solved this exercise in leetcode
    https://leetcode.com/problems/valid-palindrome/
*/

function isPalindrome(s: string): boolean {
  s = s.toLowerCase();
  s = s.replace(" ", "");
  s = s.replace(/[^a-zA-Z0-9]/g, "");
  if (s.length === 1) return true;

  let left = 0;
  let right = s.length - 1;
  // O(n)
  while (left < right) {
    if (s.charAt(left) === s.charAt(right)) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
}
