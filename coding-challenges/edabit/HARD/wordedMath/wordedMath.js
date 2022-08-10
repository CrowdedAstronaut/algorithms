const wordedMath = (expr) => {
  const translate = {
    zero: 0,
    one: 1,
    two: 2,
    plus: "+",
    minus: "-",
  };

  const answers = {
    0: "Zero",
    1: "One",
    2: "Two",
  };

  const formula = expr
    .split(" ")
    .map((w) => translate[w.toLowerCase()])
    .join("");
  return answers[eval(formula)];
};

const wordedMath2 = (e) => {
  let d = { E: 0, N: 1, W: 2, H: 3, L: "+", I: "-" };
  return ["Zero", "One", "Two"][
    eval(
      e
        .toUpperCase()
        .split(" ")
        .map((v) => d[v[1]])
        .join("")
    )
  ];
};

function wordedMath(expr) {
  let nums = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let arr = expr.toLowerCase().split(" ");
  let str = "";
  switch (arr[1]) {
    case "plus":
      str = "+";
      break;
    case "minus":
      str = "-";
      break;
  }
  str = nums.indexOf(arr[0]) + str + nums.indexOf(arr[2]);
  str = nums[eval(str)];
  return (
    str.charAt(0).toUpperCase() + str.slice(1, str.length)
  );
}

function wordedMath2(expr) {
  const ops = { plus: "+", minus: "-" };
  const nums = { zero: "0", one: "1", two: "2" };
  const [n1, op, n2] = expr
    .split(" ")
    .map((v) => v.toLowerCase());
  const output = eval(`${nums[n1]}${ops[op]}${nums[n2]}`);
  const answer = Object.keys(nums).filter(
    (key) => +nums[key] === output
  )[0];
  return answer.charAt(0).toUpperCase() + answer.slice(1);
}
