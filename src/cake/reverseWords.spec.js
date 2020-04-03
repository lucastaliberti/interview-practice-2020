import { reverseWords } from "./reverseWords";

test("", () => {
  const message = [
    "c",
    "a",
    "k",
    "e",
    " ",
    "p",
    "o",
    "u",
    "n",
    "d",
    " ",
    "s",
    "t",
    "e",
    "a",
    "l"
  ];

  reverseWords(message);

  expect(message.join("")).toEqual("steal pound cake");

  const message1 = [
    "t",
    "h",
    "e",
    " ",
    "e",
    "a",
    "g",
    "l",
    "e",
    " ",
    "h",
    "a",
    "s",
    " ",
    "l",
    "a",
    "n",
    "d",
    "e",
    "d"
  ];

  reverseWords(message1);

  expect(message1.join("")).toEqual("landed has eagle the");
});
