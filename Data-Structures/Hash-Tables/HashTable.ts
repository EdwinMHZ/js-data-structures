/*
    Hash tables are collections of key-value pairs
    Hash tables are used to store key-value pairs
    They are like arrays, but the keys are not ordered
    Unlike arrays, hash tables are fast for all of
    the following operations: finding values, adding
    new values and removing values.

    Collisions:
    - Separate Chaninig: With separate chaining, at each index
    in our array we store values using a more sophisticated data
    structure(like an array or a linked list).
    - Linear Probing: With linear probing, when we find a collision,
    we search through the array to find the next empty slot.
*/

/*
    Time Complexity
    Average cases
    Insert - O(1)
    Deletion - O(1)
    Access - O(1)
*/
class HashTable {
    keyMap: Array<Array<Array<string>>>
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }
    _hash(key: string) {
        let total = 0;
        const WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const char = key[i];
            const value = char.charCodeAt(0);
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key: string, value: string) {
        const hashedKey = this._hash(key);
        if(!this.keyMap[hashedKey]) {
            this.keyMap[hashedKey] = [];
        }
        this.keyMap[hashedKey].push([key, value]);
    }
    get(key: string) {
        const hashedKey = this._hash(key);
        if(!this.keyMap[hashedKey]) {
            return undefined;
        }
        for(let i = 0; i < this.keyMap[hashedKey].length; i++) {
            const savedKey = this.keyMap[hashedKey][i][0];
            if(savedKey === key) {
                return this.keyMap[hashedKey][i][1];
            }
        }
        return undefined;
    }
    keys() {
        const result = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            const subArr = this.keyMap[i];
            if(subArr) {
                for(let j = 0; j < subArr.length; j++) {
                    result.push(subArr[j][0]);
                }
            }
        }
        return result;
    }
    values() {
        const result = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            const subArr = this.keyMap[i];
            if(subArr) {
                for(let j = 0; j < subArr.length; j++) {
                    result.push(subArr[j][1]);
                }
            }
        }
        return [...new Set(result)];
    }
}