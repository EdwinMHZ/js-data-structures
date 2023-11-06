/*

*/

function naiveStringSearch(str:string, substr:string) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let aux = i;
        for (let j = 0; j < substr.length; j++) {
            if (str.charAt(i) !== substr.charAt(j)) {
                break;
            }
            if (j === substr.length - 1) {
                count ++;
            }
            aux++;
        }
    }
    return count;
}