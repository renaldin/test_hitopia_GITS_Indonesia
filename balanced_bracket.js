function balancedbracket(string, stack = []) {
  const bukaBrackets = ["(", "[", "{"];
  const tutupBrackets = [")", "]", "}"];
  const pasangBracket = { ")": "(", "]": "[", "}": "{" };

  if (string.length === 0) {
    const result = stack.length === 0 ? "YES" : "NO";
    return result;
  }

  const char = string[0];

  if (bukaBrackets.includes(char)) {
    stack.push(char);
  } else if (tutupBrackets.includes(char)) {
    if (stack.length === 0 || stack[stack.length - 1] !== pasangBracket[char]) {
      return "NO";
    }
    stack.pop();
  }

  const result = balancedbracket(string.slice(1), stack);

  return result;
}

module.exports = balancedbracket;
