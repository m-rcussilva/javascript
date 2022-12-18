function insertionSort(arr) {
  // Loop through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Store the current element and the previous element
    let current = arr[i];
    let j = i - 1;

    // Move all elements that are greater than the current element
    // up one position in the array
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the current element in its correct position
    arr[j + 1] = current;
  }

  // Return the sorted array
  return arr;
}

// Example usage
let arr = [5, 2, 4, 1, 3];
console.log(insertionSort(arr)); // [1, 2, 3, 4, 5]

