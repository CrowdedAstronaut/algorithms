function angryProfessor(k, a) {
  let late = [...a].filter((item) => Number(item) >= 0);
  if (late.length < k) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(angryProfessor(4, [-93, -86, 49, -62, -90, -63, 40, 72, 11, 67]));
