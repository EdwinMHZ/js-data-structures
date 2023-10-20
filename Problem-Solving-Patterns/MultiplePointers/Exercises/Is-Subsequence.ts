/*
Write a function called isSubsequence which takes in two strings and
checks whether the characters in the first string form a subsequence
of the characters in the second string.
In other words, the function should check whether the characters 
in the first string appear somewhere in the second string, without their order changing.
*/

function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.
  if (str1.length > str2.length) return false;
  let pointer1 = 0;
  let pointer2 = 0;
  while (pointer1 < str1.length && pointer2 < str2.length) {
    if (str1.charAt(pointer1) == str2.charAt(pointer2)) {
      pointer1++;
      pointer2++;
    } else {
      pointer2++;
    }
  }

  return pointer1 == str1.length;
}
