function interview(arr, tot) {
  let very_easy_time = 5;
  let easy_time = 10;
  let medium_time = 15;
  let hard_time = 20;
  let very_easy = arr.slice(0, 2);
  let easy = arr.slice(2, 4);
  let medium = arr.slice(4, 6);
  let hard = arr.slice(6);
  if (
    arr.length === 8 &&
    very_easy.every((item) => item <= very_easy_time) &&
    easy.every((item) => item <= easy_time) &&
    medium.every((item) => item <= medium_time) &&
    hard.every((item) => item <= hard_time) &&
    tot <= 120
  ) {
    return "qualified";
  } else return "disqualified";
}

interview([5, 5, 10, 10, 15, 15, 20, 20], 120);

const interview = (arr, tot) => {
  const benchmark = [5, 5, 10, 10, 15, 15, 20, 20, 120];
  const performance = [...arr, tot];
  return performance.every((x, i) => x <= benchmark[i])
    ? "qualified"
    : "disqualified";
};
