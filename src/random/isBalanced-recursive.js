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
  const lastPosition = arr.length - 1;

  if (lastPosition % 2 === 0) {
    return false;
  }

  if (lastPosition < 1) {
    return false;
  }

  return checkPair(arr, bracketMap);
}

function checkPair(arr, bracketMap) {
  const newArray = [...arr];

  if (newArray.length === 0) {
    return true;
  }

  if (newArray.length < 2) {
    return false;
  }

  const current = newArray[0];
  const opposite = newArray[arr.length - 1];

  if (bracketMap[current] === opposite) {
    newArray.shift();
    newArray.pop();

    return checkPair(newArray, bracketMap);
  }

  return false;
}

// console.log(isBalanced("(("), false);
// console.log(isBalanced("((()}"), false);
// console.log(isBalanced("{(())}"), true);
// console.log(isBalanced("aaabb", { a: "b" }), false);
