function isPalindrome(x) {
  // Check if the number is negative
  if (x < 0) {
    return false
  }

  // Convert the number to a string and split into an array
  const strX = String(x)
  const arrX = strX.split('')

  // Use two pointers approach to compare characters from start and end
  let start = 0
  let end = arrX.length - 1

  while (start < end) {
    if (arrX[start] !== arrX[end]) {
      return false // If characters don't match, it's not a palindrome
    }

    // Move the pointers towards each other
    start++
    end--
  }

  // If the loop completes without returning false, it's a palindrome
  return true
}

// console.log(isPalindrome(10))



function isPalindrome1(x) {
  // cant be negative
  if (x < 0) {
    return false
  }
  // covert number to str to arr 
  x = String(x)
  const newX = x.split('')
  // check if the start === the end
  let start = 0
  let end = newX.length - 1
  for (let i = 0; i < newX.length; i++) {
    if (newX[start] !== newX[end]) {
      return false
    }
    start++
    end--
  }
  return true
}
console.log(isPalindrome1(101))
