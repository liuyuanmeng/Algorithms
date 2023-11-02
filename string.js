// reversw string

function reverseString(str) {
  const newString = [...str].reverse().join('')
  return newString
}
// console.log(reverseString('Hey,daisy'))

function mergeSortedArrays(arr1, arr2) {
  const newArray = arr1.concat(arr2)
  return newArray.sort((a, b) => a - b)
}

// console.log(mergeSortedArrays([], [3, 4]))

function mergeTwoArrays(arr1, arr2) {
  // Initialize an empty array to store the merged result
  const mergedArray = []

  // Initialize variables to track the current elements in arr1 and arr2
  let arr1Item = arr1[0]
  let arr2Item = arr2[0]

  // Initialize indices to traverse arr1 and arr2
  let i = 1
  let j = 1
  // Check input arrays
  if (arr1.length === 0) {
    return arr2
  }
  if (arr2.length === 0) {
    return arr1
  }

  // Loop continues as long as either arr1Item or arr2Item is not undefined
  while (arr1Item !== undefined || arr2Item !== undefined) {
    // If arr2Item is undefined (end of arr2) or arr1Item is less than arr2Item
    if (arr2Item === undefined || arr1Item < arr2Item) {
      // Push arr1Item into the mergedArray, update arr1Item to the next element in arr1, and increment the index i
      mergedArray.push(arr1Item)
      arr1Item = arr1[i]
      i++
    } else {
      // If arr1Item is greater than or equal to arr2Item
      // Push arr2Item into the mergedArray, update arr2Item to the next element in arr2, and increment the index j
      mergedArray.push(arr2Item)
      arr2Item = arr2[j]
      j++
    }
  }

  // Return the merged and sorted array
  return mergedArray
}

// Example usage
console.log(mergeTwoArrays([1, 2, 5], [2, 3, 4]))

