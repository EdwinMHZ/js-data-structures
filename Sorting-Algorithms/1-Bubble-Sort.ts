/*
    A sorting algorithm where the largest values
    bubble up to the top
*/

/* Time complexity O(n^2) */
function bubbleSort(arr:number[]) {
    for (let i = arr.length; i >= 0; i--) {
        for (let j = 0; j < i -1; j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = tmp;
            }   
        }   
    }

    return arr;
}

/* Time complexity O(n) BEST CASE */
function bubbleSortOptimized(arr:number[]) {
    let noSwaps;
    for (let i = arr.length; i >= 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i -1; j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = tmp;
                noSwaps = false;
            }
        }
        if (noSwaps) {
            break;
        }
    }

    return arr;
}