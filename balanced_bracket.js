function balancedbracket(string) {
  const stack = [];
  const bukaBrackets = ["(", "[", "{"];
  const tutupBrackets = [")", "]", "}"];
  const pasangBracket = { ")": "(", "]": "[", "}": "{" };

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (bukaBrackets.includes(char)) {
      stack.push(char);
    } else if (tutupBrackets.includes(char)) {
      if (
        stack.length === 0 ||
        stack[stack.length - 1] !== pasangBracket[char]
      ) {
        return "NO";
      }
      stack.pop();
    }
  }

  const result = stack.length === 0 ? "YES" : "NO";

  return result;
}

module.exports = balancedbracket;
