// Solve the problem ... if you can´t, solve a simpler problem

// SIMPLIFY

/* -Find the core difficulty in what you're trying to do
-Temporarily ignore that difficulty
-Write a simplified solution
-Then incorporate that difficulty back in */

// Example
//Write a function which takes in a string and returns counts of each character in the string

function isAlphanumeric(str) {
  return /^[a-zA-Z0-9]+$/.test(str);
}

function charCount(str) {
  //make object to return at end
  const result = new Map();
  //loop over string, for each character...
  str = str.toLowerCase();
  for (let index = 0; index < str.length; index++) {
    const char = str.charAt(index);
    //if the char is a number/letter AND is a key in object, add one to count
    if (result.has(char) && isAlphanumeric(char)) {
      result.set(char, result.get(char) + 1);
    } else if (isAlphanumeric(char)) {
      //if the char is a number/letter AND is not in object, add it to object and set value to 1
      result.set(char, 1);
    }
    //if character is something else don't do anything
  }
  return result;
  // Return an object with keys that are lowercase alphanumeric characters in the string
}

console.log(charCount("....11qq"));
console.log(charCount("helLo"));
