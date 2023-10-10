/*
    Refactoring Questions
    -Can you check the result?
    -Can you derive the result differently?
    -Can  you understand it at a glance?
    -Can you use the result or method for some other problem?
    -Can you improve the performance of your solution?
    -Can you think of other ways to refactor?
    -How have other people solved this problem?
*/

function isAlphanumeric(str) {
  return /^[a-zA-Z0-9]+$/.test(str);
}

function charCount(str) {
  const result = new Map();
  str = str.toLowerCase();
  for (const char of str) {
    let count = 1;
    if (result.has(char) && isAlphanumeric(char)) {
      count = result.get(char) + 1;
    }
    result.set(char, count);
  }
  return result;
}

console.log(charCount("....11qq"));
console.log(charCount("helLo"));
