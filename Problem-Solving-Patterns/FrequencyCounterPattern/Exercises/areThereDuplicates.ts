/* 
    Implement a function called, areThereDuplicates 
    which accepts a variable number of arguments, 
    and checks whether there are any duplicates among
    the arguments passed in.
    You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 */

// Time complexity O(n)
// Space Complexity O(n)

function areThereDuplicates() {
  const mapArgs = new Map();

  for (let i = 0; i < arguments.length; i++) {
    if (mapArgs.has(arguments[i])) {
      return true;
    } else {
      mapArgs.set(arguments[i], 1);
    }
  }

  return false;
}
