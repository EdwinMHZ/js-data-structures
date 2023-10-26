/* function outer(input: any) {
  const outerScopedVariable = [];

  function helper(helperInput: any) {
    helper(helperInput--);
  }

  helper(input);

  return outerScopedVariable;
} */

// Example

function collectOddValues(arr: number[]) {
  let result: number[] = [];

  function helper(helperInput: number[]) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

// Pure Recursion

function collectOddValuesPure(arr: number[]) {
  let newArr: number[] = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

console.log("PureRecursion", collectOddValuesPure([1, 2, 3, 4, 5]));

/*
    Pure Recursion Tips
    - For arrays, use methods like slice, the spread operator,
    and concat that make copies of arrays so you don't mutate them
    - Remember that strings are immutable, so you wll need to use
    methods like slice, substr, or substring to make copies of strings
    - To make copies of objects, use Object.assign, or the spread operator
*/
