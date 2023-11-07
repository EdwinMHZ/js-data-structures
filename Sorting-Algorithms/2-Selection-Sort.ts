/*
    Similar to bubble sort, but instead of first
    placing large values into sorted position, it
    places small values into sorted position

*/

/* Time Complexity O(n^2)*/
function selectionSort(arr:number[]) {
    if (arr.length === 0) {
        return [];
    }
    for (let i = 0; i < arr.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexMin]) {
                indexMin = j;
            }
        }
        if (i !== indexMin) {
            const tmp = arr[i];
            arr[i] = arr[indexMin];
            arr[indexMin] = tmp;   
        }
    }

    return arr;
}