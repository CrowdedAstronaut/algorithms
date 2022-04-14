const showdown = (p1, p2) =>
  ["p1", "tie", "p2"][
    Math.sign(p1.indexOf("B") - p2.indexOf("B")) + 1
  ];

function showdown(p1, p2) {
  let id1 = p1.indexOf("B");
  let id2 = p2.indexOf("B");
  return id1 == id2 ? "tie" : id1 < id2 ? "p1" : "p2";
}
