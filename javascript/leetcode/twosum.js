function twoSum(nums, target) {
  const answer = []

  for (let i = 0; i < nums.length - 1; i++) {
    const firstIndex = nums[i]

    for (let j = i + 1; j < nums.length; j++) {
      const secondIndex = nums[j]

      if (firstIndex + secondIndex === target) {
        answer.push(i, j)
        return answer // Return here to stop further iterations once a solution is found
      }
    }
  }

  return answer // Return an empty array if no solution is found
}

console.log(twoSum([3, 3], 6)) // Output: [0, 1]

var twoSum = function (nums, target) {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap.hasOwnProperty(complement)) {
      return [numMap[complement], i];
    }

    numMap[nums[i]] = i;
  }

  return [];
};

console.log(twoSum([3, 3], 6)); // Output: [0, 1]

