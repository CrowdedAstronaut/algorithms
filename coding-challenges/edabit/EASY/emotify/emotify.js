function emotify(str) {
  let [first, mid, last] = str.split(" ");

  let emotify = {
    smile: ":D",
    grin: ":)",
    sad: ":(",
    mad: ":P",
  };

  return `Make me ${emotify[last]}`;
}

const emotify = (s) =>
  "Make me " +
  { smile: ":D", grin: ":)", sad: ":(", mad: ":P" }[
    s.split(" ").pop()
  ];

const emotify = (str) =>
  str.replace(/\S+$/, (m) => {
    switch (m) {
      case "smile":
        return ":D";
      case "grin":
        return ":)";
      case "sad":
        return ":(";
      case "mad":
        return ":P";
    }
  });
