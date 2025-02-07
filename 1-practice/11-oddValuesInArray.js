// Write a function that gets the odd values in array

//Solution using pure recursion
function collectOddValues(arr) {
    let newArr = [];
    if (arr.length === 0) return newArr;

    if (arr[0] % 2 !== 0) newArr.push(arr[0]);

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

console.log(collectOddValues([0, 2, 5, 1, 8, 7,513]));


// Solution using helper method recursion
function collectOddValues2(arr) {
    let result = [];
    function helper(helperInput) {
        if (helperInput.length === 0) return;

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }
        helper(helperInput.slice(1));
    }
    helper(arr);
    return result;
}
console.log(collectOddValues2([0, 2, 5, 1, 8, 7]));
