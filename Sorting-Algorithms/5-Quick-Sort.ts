/*
    - Like merge sort, exploits the fact that arrays of
    0 or 1 element are always sorted.
    - Works by selecting one element(called the "pivot")
    and finding the index where the pivot should end up
    in the sorted array
    - Once the pivot is positioned appropriately, quick sort
    can be applied on either side of the pivot

*/

function pivot(arr: number[], start?: number, end?: number) {
    start = start ? start : 0;
    end = end ? end : arr.length;
    let pivot = arr[start];
    let pivotIndex = start;
    for (let i = start; i <= end; i++) {
        if (pivot > arr[i]) {
            pivotIndex++;
            const tmp = arr[pivotIndex];
            arr[pivotIndex] = arr[i];
            arr[i] = tmp;
        }
    }
    const tmp = arr[pivotIndex];
    arr[pivotIndex] = arr[start];
    arr[start] = tmp;
    return pivotIndex;
}

// Time Complexity(Best) O(nlog(n))
// Time Complexity(Average) O(nlog(n))
// Time Complexity(Worst) O(n^2)
// Space Complexity O(log(n))
function quickSort(arr: number[], start = 0, end = arr.length -1): number[] {
    if(start < end) {
        const updatedIndex = pivot(arr, start, end);
        // left
        quickSort(arr,start, updatedIndex - 1);
        // right 
        quickSort(arr,updatedIndex + 1, end);
    }
    return arr
}