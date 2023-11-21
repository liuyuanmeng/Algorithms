// function removeDuplicates(nums) {
//   const expectedNums = []
//   let counter = 0

//   for (let i = 0; i < nums.length; i++) {

//     if (!expectedNums.includes(nums[i])) {

//       expectedNums.push(nums[i])
//       counter = counter + 1

//     }

//   }
//   return counter

// }
// console.log(removeDuplicates([1, 1, 2]))

function removeDuplicates(nums) {
  // first number is always unique
  let index = 1
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[index] = nums[i + 1]
      index++
    }

  }
  return index

}
console.log(removeDuplicates([1, 1, 2]))



