/*
    Big O of Objects
    Insertion O(1)
    Removal O(1)
    Searching O(n)
    Access O(n)
*/

let instructor = {
  firstName: "Test",
  isInstructor: false,
  favoriteNumbers: [1, 4, 7],
};

/*
    Big O of Object Methods
    Object.keys O(n)
    Object.values O(n)
    Object.entries O(n)
    hasOwnProperty O(1)
*/

console.log(Object.keys(instructor));
console.log(Object.values(instructor));
console.log(Object.entries(instructor));
console.log(instructor.hasOwnProperty("firstName"));
