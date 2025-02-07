// Suppose you want to count the number of times a smaller string appears in a longer string
// A straightforward approach involves checking pairs of characters individually

//Not Optimized Solution ❌❌
function countSubstring(longStr, shortStr) {
    let count = 0;
    for (let i = 0; i <= longStr.length - shortStr.length; i++) {
        for (let j = 0; j < shortStr.length; j++) {
            if (shortStr[j] !== longStr[i + j]) break;
            if (j === shortStr.length - 1) count++;
        }
    }
    return count;
}

console.log(countSubstring('sopranos thanos', 'os'));
