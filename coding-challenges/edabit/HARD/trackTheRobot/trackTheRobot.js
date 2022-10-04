function trackRobot(...steps) {
  let r = [0, 0];
  for (let i in steps) {
    let d = i % 4;
    if (d == 0) r[1] += steps[i];
    if (d == 1) r[0] += steps[i];
    if (d == 2) r[1] -= steps[i];
    if (d == 3) r[0] -= steps[i];
  }
  return r;
}

trackRobot(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
