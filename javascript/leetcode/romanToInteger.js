

function romanToInt(s) {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
  const arrayStr = s.split('')
  let result = 0

  for (let i = 0; i < arrayStr.length; i++) {
    // Compare the current symbol with the next one
    if (map[arrayStr[i]] < map[arrayStr[i + 1]]) {
      result += map[arrayStr[i + 1]] - map[arrayStr[i]]
      // Skip the next symbol, as it has already been considered
      i++
    } else {
      result += map[arrayStr[i]]
    }
  }

  return result
}

console.log(romanToInt('III'))
