function jumpingOnClouds(c) {
  let i = 0;
  let length = c.length;
  let jumps = 0;

  while (i < length) {
    if (c[i + 2] === 0) {
      jumps++;
      i += 2;
    } else if (c[i + 1] === 0) {
      jumps++;
      i++;
    } else {
      // Thunder Cloud...
      i++;
    }
  }

  return jumps;
}

jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]);
