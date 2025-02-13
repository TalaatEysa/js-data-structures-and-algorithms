// Implement Insertion Sort

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([96, 51, 23, 12, 49]));


//Another Implementation
function insertionSort2(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j = i - 1;

        // Use a while loop to shift elements to the right
        while (j >= 0 && arr[j] > currentVal) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Place the current value in its correct position
        arr[j + 1] = currentVal;
    }
    return arr;
}
console.log(insertionSort2([96, 51, 23, 12, 49]));
