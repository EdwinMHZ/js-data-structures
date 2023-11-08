/*
    Builds up the sort by gradually creating
    a larger left half which is always sorted

*/

// My approach
// Time Complexity O(n^2)
function insertionSort(arr:number[]) {
    if (arr.length === 0 || arr.length === 1) {
        return arr;
    }

    for (let i = 1; i < arr.length; i++) {
        let newElem = i;
        for (let j = i - 1; j >= 0; j--) {
            if (arr[newElem] < arr[j]) {
                const tmp = arr[newElem];
                arr[newElem] = arr[j];
                arr[j] = tmp;
                newElem = j;
            }  
        }
    }

    return arr;
}

// Another approach
// Time Complexity O(n^2) worst case, best case O(n)
function insertionSort(arr:number[]) {
    if (arr.length === 0 || arr.length === 1) {
        return arr;
    }

    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }

    return arr;
}