/*
    Write a function called averagePair. Given a sorted array of integers and a target average, 
    determine if there is a pair of values in the array where the average of the pair equals the target average.
    There may be more than one pair that matches the average target.
*/

function averagePair(sortedArr, averageNum) {
  // add whatever parameters you deem necessary - good luck!
  if (sortedArr.length === 0) {
    return false;
  }
  let i = 0;
  let j = sortedArr.length - 1;
  while (i < j) {
    const avg = (sortedArr[i] + sortedArr[j]) / 2;
    if (avg == averageNum) {
      return true;
    } else if (avg < averageNum) {
      i++;
    } else {
      j--;
    }
  }

  return false;
}
