// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Solution 1
function validAnagram1(str1, str2) {
    if (str1.length !== str2.length) return false;

    let lookup = {};

    for (const char of str1) {
        lookup[char] = (lookup[char] || 0) + 1;
    }

    for (const char of str2) {
        if (!lookup[char]) {
            return false;
        } else {
            lookup[char] -= 1;
        }
    }

    return true;
}

console.log(validAnagram1('cinema', 'iceman'));
console.log(validAnagram1('mean', 'mern'));

//Solution 2
function validAnagram2(str1, str2) {
    if (str1.length !== str2.length) return false;
    let lookup = {};
    for (let i = 0; i < str1.length; i++) {
        lookup[str1[i]] = (lookup[str1[i]] || 0) + 1;
        lookup[str2[i]] = (lookup[str2[i]] || 0) - 1;
    }
    for (const key in lookup) {
        if (lookup[key] !== 0) return false;
    }
    return true;
}
console.log(validAnagram2('cinem', 'iceman'));
console.log(validAnagram2('mena', 'name'));
