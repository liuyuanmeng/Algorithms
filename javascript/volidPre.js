const isValid = (s) => {
  const stack = []
  const valid = { '[': ']', '{': '}', '(': ')' }

  for (const c of s) {
    if (c in valid) {
      stack.push(c)
    } else if (Object.values(valid).includes(c)) {
      if (stack.length === 0 || valid[stack.pop()] !== c) {
        return false
      }
    } else {
      return false
    }
  }

  return stack.length === 0
}

console.log(isValid('()'))
