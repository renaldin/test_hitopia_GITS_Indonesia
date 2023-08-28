function isPalindrome(string) {
  const len = string.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (string[i] !== string[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

function highestPalindromeUtil(string, i, index) {
  if (i < 0) {
    return -1;
  }

  if (index >= Math.floor(string.length / 2)) {
    return isPalindrome(string) ? parseInt(string) : -1;
  }

  const left = string[index];
  const right = string[string.length - 1 - index];

  if (left !== right) {
    const maxChar = Math.max(left, right);
    const newString =
      string.substring(0, index) +
      maxChar +
      string.substring(index + 1, string.length - index - 1) +
      maxChar +
      string.substring(string.length - index);
    return Math.max(
      highestPalindromeUtil(newString, i - 1, index + 1),
      highestPalindromeUtil(string, i, index + 1)
    );
  } else {
    return highestPalindromeUtil(string, i, index + 1);
  }
}

function highestPalindrome(string, i) {
  console.log(highestPalindromeUtil(string, i, 0));
  return highestPalindromeUtil(string, i, 0);
}

module.exports = highestPalindrome;
