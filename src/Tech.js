****Here's a function that finds pairs of numbers in the array that add up to the target (10):


jsx
const numbers = [1, 22, 2, 3, 5, 7];
const target = 10;

function findPairs(arr, target) {
  const pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }

  return pairs;
}

console.log(findPairs(numbers, target));
// Output: [[1, 9] (not found), [3, 7]]


***However, since 9 is not present in the array, the actual output will be:


jsx
[[3, 7]]


This function has a time complexity of O(n^2) due to the nested loops.

Alternatively, you can use a Set data structure to improve performance (O(n)):


jsx
const numbers = [1, 22, 2, 3, 5, 7];
const target = 10;

function findPairs(arr, target) {
  const numSet = new Set();
  const pairs = [];

  for (let num of arr) {
    const complement = target - num;
    if (numSet.has(complement)) {
      pairs.push([complement, num]);
    }
    numSet.add(num);
  }

  return pairs;
}

console.log(findPairs(numbers, target));
// Output: [[3, 7]]


Here are the examples without using inbuilt functions:

1. Find the Maximum Value in an Array


function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const arr = [1, 2, 3, 4, 5];
console.log(findMax(arr)); // Output: 5


1. Reverse an Array


function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}

const arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr)); // Output: [5, 4, 3, 2, 1]


1. Check if an Element Exists in an Array


function includesElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

const arr = [1, 2, 3, 4, 5];
console.log(includesElement(arr, 3)); // Output: true


1. Filter Out Duplicate Values from an Array


function removeDuplicates(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(arr[i]);
    }
  }
  return result;
}

const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arr)); // Output: [1, 2, 3, 4, 5]


1. Find the Index of a Specific Element in an Array


function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const arr = [1, 2, 3, 4, 5];
console.log(findIndex(arr, 3)); // Output: 2


1. Sort an Array in Ascending Order


function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const arr = [5, 2, 8, 1, 9];
console.log(sortArray(arr)); // Output: [1, 2, 5, 8, 9]


1. Merge Two Arrays


function mergeArrays(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    result.push(arr2[i]);
  }
  return result;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(mergeArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]


1. Find the Sum of All Elements in an Array


function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const arr = [1, 2, 3, 4, 5];
console.log(sumArray(arr)); // Output: 15


1. Find the Average of All Elements in an Array


function averageArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  