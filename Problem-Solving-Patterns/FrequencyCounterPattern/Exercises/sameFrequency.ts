/*
    Write a function called sameFrequency. Given two
    positive integers, find out if the two numbers have 
    the same frequency of digits.

    Your solution must have the following complexities:
    Time O(n)
*/

function getFreq(str: string) {
  const mapFreq = new Map();
  for (const char of str) {
    let count = 1;
    if (mapFreq.has(char)) {
      count = count + mapFreq.get(char);
    }
    mapFreq.set(char, count);
  }

  return mapFreq;
}

function sameFrequency(num1: number, num2: number) {
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();

  if (strNum1.length !== strNum2.length) {
    return false;
  }

  const freq1 = getFreq(strNum1); //O(n)
  const freq2 = getFreq(strNum2); //O(n)
  /* console.log("FREQ1", freq1);
  console.log("FREQ2", freq2); */

  if (freq1.size !== freq2.size) {
    return false;
  }

  let result = true;
  // O(n)
  freq1.forEach((value, key) => {
    if ((freq2.has(key) && freq2.get(key) !== value) || !freq2.has(key)) {
      result = false;
      return;
    }
  });

  return result;
}

console.log("Result", sameFrequency(182, 281));
console.log("Result", sameFrequency(34, 14));
console.log("Result", sameFrequency(3589578, 5879385));
console.log("Result", sameFrequency(22, 222));
// true
// false
// true
// false
