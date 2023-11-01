/*
    Basically it loops through the array and check
    if the current array element is equal to the value.
    If it is, return the index, otherwise return -1.

    Time Complexity O(n)
*/

function linearSearch(array:any, element: any): number {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return i;
        }
    }
    return -1;
}