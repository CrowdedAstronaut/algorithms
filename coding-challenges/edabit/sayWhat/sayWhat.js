const sayWhat = (obj) =>
  `${obj[1]} ${obj[2]} ${obj[3]} ${obj[2]}`;

const elegantSayWhat = (obj) =>
  [1, 2, 3, 2].map((i) => obj[i]).join(" ");
