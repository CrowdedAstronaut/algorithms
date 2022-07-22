function angryProfessor(k, a) {
  let late = [a].filter((item) => Number(item) > 0);
  //   if (late.length < k) {
  //     return "YES";
  //   } else {
  //     return "NO";
  //   }
  return late;
}

console.log(angryProfessor(4, [-2, -1, 0, 1, 2]));
