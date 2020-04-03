import { processForm } from "./amazon";
/*

<input name='a.b.a' value='1'/>
<input name='a.b.c' value ='2' />
<input name='a.b.d' value='3' />
<input name='a.c' value='4'/>

*/

const formValue = [
  ["a.b.a", "1"],
  ["a.b.c", "2"],
  ["a.c", "4"],
  ["b.a", "5"],
  ["a.b.d", "3"]
];

const expects = {
  a: {
    b: {
      a: "1",
      c: "2",
      d: "3"
    },
    c: "4"
  },
  b: {
    a: "5"
  }
};

const formValue1 = [
  ["a.b.a", "1"],
  ["a.b.a", "2"],
  ["a.b.a", "3"],
  ["a.b.c", "3"],
  ["a.b.c", "4"],
  ["a.b", "3"],
  ["a.b", "4"]
];

const expects1 = {
  a: {
    b: [
      {
        a: ["1", "2", "3"],
        c: ["3", "4"]
      },
      "3",
      "4"
    ]
  }
};

it("should work", () => {
  expect(processForm(formValue)).toEqual(expects);
  expect(processForm(formValue1)).toEqual(expects1);
});

// https://www.reddit.com/r/javascript/comments/fkaglg/i_made_a_chess_engine_using_only_vanilla_js_let/
