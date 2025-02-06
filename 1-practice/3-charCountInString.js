// Write a function which takes in a string and returns counts of each character in the string.

// Solution 1
function charCountInString1(str) {
    let result = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (result[char] > 0) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    }
    return result;
}

// Solution 2
function charCountInString2(str) {
    let result = {};
    str = str.toLowerCase();
    for (let char of str) {
        if (/[a-z0-9]/.test(char)) {
            result[char] = (result[char] || 0) + 1;
        }
    }
    return result;
}
//Solution 3
function charCountInString3(str) {
    let result = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (isAlphaNumeric(char)) {
            result[char] = ++result[char] || 1;
        }
    }
    return result;
}
//Helper function to check for alphaNumeric characters
function isAlphaNumeric(char) {
    let code = char.charCodeAt();
    if (
        !(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)
    ) {
        return false;
    }
    return true;
}

console.log(charCountInString1('java'));
console.log(charCountInString2('hello Hi'));
console.log(charCountInString3('ruby on rails'));
