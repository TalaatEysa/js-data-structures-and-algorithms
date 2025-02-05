// Write a function that accepts a string input and returns a reversed copy

//Solution 1
function reverseString1(str) {
    return str.split('').reverse().join('');
}

// Solution 2
function reverseString2(str) {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}

// Solution 3
function reverseString3(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString1('nodejs'));

console.log(reverseString2('java'));

console.log(reverseString3('ruby'));
