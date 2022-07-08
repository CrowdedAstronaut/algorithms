const findShort = (s) => {
  let words = s
    .split(" ")
    .map((word) => Number(word.length));
  return Math.min(...words);
};

findShort(
  "bitcoin take over the world maybe who knows perhaps"
);
