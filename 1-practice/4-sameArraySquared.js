// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (const val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (const val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (let key in frequencyCounter1) {
        if (
            !(key ** 2 in frequencyCounter2) ||
            frequencyCounter2[key ** 2] !== frequencyCounter1[key]
        ) {
            return false;
        }
    }
    return true;
}

console.log(same([1, 2, 4], [4, 16, 1]));
console.log(same([1, 7, 4], [14, 8, 5]));


