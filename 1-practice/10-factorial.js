// Write a function that calculates the factorial of a given positive integer n. The factorial of a number n is the product of all positive integers from 1 to n.

//Solution using for loop
function factorial1(n) {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        throw new Error('Input must be a non-negative integer.');
    }
    let total = 1;
    for (let i = n; i > 0; i--) {
        total *= i;
    }
    return total;
}
console.log(factorial1(4));



// Solution using recursion
function factorial(n) {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        throw new Error('Input must be a non-negative integer.');
    }
    if (n === 0) return 1;
    return n === 1 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5));
