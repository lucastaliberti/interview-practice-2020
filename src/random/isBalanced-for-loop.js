/*
Balanced parenthesis

Implement a function isBalanced(string input) that 
takes a list of parentheses and returns true if they are balanced, 
false otherwise.

Example: 
isBalanced(“((”) -> false
isBalanced(“((()}”) -> false
isBalanced(“{(())}”) -> true
*/

const defaultBracketMap = {
  "(": ")",
  "[": "]",
  "{": "}",
  "<": ">"
};

function isBalanced(string, bracketMap = defaultBracketMap) {
  const arr = string.split("");
  const mid = Math.floor(arr.length / 2);
  const lastPosition = arr.length - 1;

  if (lastPosition % 2 === 0) {
    return false;
  }

  if (lastPosition < 1) {
    return false;
  }

  for (let i = 0; i < mid; i++) {
    const current = arr[i];
    const opposite = arr[lastPosition - i];

    if (bracketMap[current] === opposite) {
      continue;
    }

    return false;
  }

  return true;
}

// O(n/2) > O(n)

// console.log(isBalanced("(("), false);
// console.log(isBalanced("((()}"), false);
// console.log(isBalanced("{(())}"), true);
// console.log(isBalanced("aaabb", { a: "b" }), true);
