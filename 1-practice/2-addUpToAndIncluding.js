// Write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

// Solution 1
function addUpTo1(n) {
    return (n * (n + 1)) / 2;
}


//Solution 2
function addUpTo2(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(addUpTo1(4));
console.log(addUpTo2(4));
