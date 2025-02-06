// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr, num) {
    if (num > arr.length) return null;

    let tempSum = 0;
    let maxSum = 0;

    for (let i = 0; i < num; i++) {
        tempSum += arr[i];
    }

    maxSum = tempSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

console.log(maxSubarraySum([1, 2, 3, 5], 3));