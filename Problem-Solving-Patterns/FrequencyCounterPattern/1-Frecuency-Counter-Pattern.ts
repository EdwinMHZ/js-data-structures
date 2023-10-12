/*
    This pattern uses objects or sets to
    collect values/frequencies of values
    
    This can often avoid the need for
    nested loops or O(n^2) operations
    with arrays / strings

*/

// Example/Exercise

// Write a function called same, which accepts two arrays.
// The function should return true if every value in the
// array has it's corresponding value squared in the second
// array. The frequency of values must be the same.

function createMapFreq(arr: number[]): Map<number, number> {
  const mapFreq = new Map();
  arr.forEach((value) => {
    let frequency = 1;
    if (mapFreq.has(value)) {
      frequency = mapFreq.get(value) + 1;
    }
    mapFreq.set(value, frequency);
  });

  return mapFreq;
}

function same(arr1: number[], arr2: number[]): boolean {
  // Validate the sizes of the array
  if (arr1.length !== arr2.length) return false;

  // Create the object/map which stores the frequencies
  let result = true;
  const mapFreq = createMapFreq(arr1); // O(n)

  // Loop through the arrays to validate if every value of the first array contains their values squared in the second array
  const mapSqure = createMapFreq(arr2); // O(n)

  mapFreq.forEach((value, key) => {
    // O(n)
    const squaredValue = Math.pow(key, 2);
    if (mapSqure.has(squaredValue) && mapSqure.get(squaredValue) !== value) {
      result = false;
      return;
    }
  });
  return result;
}

// Examples
// same([1,2,3], [4,1,9]) TRUE
// same([1,2,3], [1,9]) FALSE
// same([1,2,1], [4,4,9]) FALSE (must be same frequency)

console.log("Result:", same([1, 2, 3], [4, 1, 9]));
console.log("Result:", same([1, 2, 3], [1, 9]));
console.log("Result:", same([1, 2, 1], [4, 4, 9]));

// My solution was the same as the instructor's
