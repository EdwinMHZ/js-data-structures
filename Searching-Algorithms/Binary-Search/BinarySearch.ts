/*
    Binary Search is faster than linear search
    due to "eliminates" half of the remaining
    elements at a time, but only works on sorted arrays.

    Time complexity O(log(n))
*/

function binarySearch(arr: any[], element: any): number {
    let left = 0;
    let  rigth = arr.length - 1;
    let middle;
    while (left <= rigth) {
        middle = Math.floor((rigth - left) / 2) + left;
        if (arr[middle] === element) {
            return middle;
        } else if(arr[middle] < element) {
            left = middle + 1;
        } else {
            rigth = middle - 1;
        }
    }
    return -1;
}