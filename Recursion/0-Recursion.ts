/*
    What is recursion?
    A process(a function in our case) that calls itself

    JSON.parse / JSON.stringify
    document.getElementById and DOM traversal algorithms
    Object traversal

    Are some examples that use recursion

    The call stack
    It's a stack data structure
    Any time a function is invoked it is placed(pushed) on the top of the call stack
    When JavaScript sees the return keyword or when the function ends, the compiler will remove(pop)

    How recursive functions work
    Invoke the same function with
    a different input until you reach your base case!
    
    Base case
    The condition when the recursion ends

    Two essential parts of a recursive function!
    - Base Case
    - Different Input
*/

// Example of a recursive function

function countDown(num: number) {
  if (num <= 0) {
    console.log("All done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(5);

function sumRange(num: number): number {
  if (num === 1) {
    return 1;
  }
  return num + sumRange(num - 1);
}

// 3 + sumRange(2) 3 + 3-> 6
// 2 + sumRange(1) -> 2 + 1 -> 3
// 1 -> 1

console.log("sumRange:", sumRange(3));

// Factorial

function factorial(num: number): number {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log("Factorial", factorial(5));
