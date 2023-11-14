/*
    - Radix sort, is a special sorting algorithm that works on lists of numbers

    - It never makes comparisons between elements

    - It exploits the fact that information about 
    the size of a number is encoded in the number
    of digits

    - More digits means a bigger number

*/

function getDigitAlt(num:number, place: number): number {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCountAlt(num:number): number {
    if (num === 0) {
        return 1;
    }
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigitsAlt(nums:number[]) {
    let max = 0;
    nums.forEach((num) => {
        max = Math.max(max, digitCount(num))
    })

    return max;
}

// Returns the digit in num at the given place(My approach)
function getDigit(num:number, place: number): number {
    const strNum = num.toString();
    const idx = (strNum.length - 1) - place;

    return idx >= 0 ? Number(strNum.charAt(idx)) : 0;
}

// My approach
function digitCount(num:number): number {
    return num.toString().length;
}

// Given an array of numbers
// returns the number of digits
// in the largest numbers in the list
// My approach
function mostDigits(nums: number[]): number {
    let max = 0;
    nums.forEach((num) => {
        const numLen = num.toString().length;
        if( numLen > max) {
            max = numLen;
        }
    });

    return max;
}

// Time Complexity O()
function radixSort(nums: number[]) {
    const maxDigits = mostDigits(nums);
    for(let i = 0; i < maxDigits; i++) {
        const buckets: Array<number[]> = Array.from({length: 10}, () => []);
        nums.forEach(num => {
            const digit = getDigit(num, i);
            buckets[digit].push(num);
        });
        let newArr: number[] = [];
        buckets.forEach(bucket => {
            newArr = newArr.concat([...bucket]);
        });
        nums = [...newArr];
    }
    return nums;
}
