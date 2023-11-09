/*
    - It's a combination of two things: merging and sorting
    - Exploits the facts that array of 0 or 1 element are always sorted
    - Works by descomponsing an array into smaller arrays of 0 or 1 elements,
    then building up a newly sorted array
*/

function merge(arr1: number[], arr2: number[]) {
    if(arr1.length === 0) {
        return arr2;
    }
    if(arr2.length === 0) {
        return arr1;
    }
    const newArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i]);
            i++;
        } else {
            newArr.push(arr2[j]);
            j++;
        }
        if (i === arr1.length && j < arr2.length) {
            newArr.push(...arr2.slice(j, arr2.length));
            break;
        }
        if (j === arr2.length && i < arr1.length) {
            newArr.push(...arr1.slice(i, arr1.length));
            break;
        }
    }
    return newArr;
}
// Time Complexity(Best) O(nlog(n))
// Time Complexity(Average) O(nlog(n))
// Time Complexity(Worst) O(nlog(n))
// Space Complexity(Best) O(n)
function mergeSort(arr: number[]) {
    if (arr.length === 1 || arr.length === 0) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, middle))
    const right = mergeSort(arr.slice(middle, arr.length));
    
    const result = merge(left, right);
    return result;
}