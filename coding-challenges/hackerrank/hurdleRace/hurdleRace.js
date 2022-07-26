function hurdleRace(k, height) {
  if (k > Math.max(...height)) {
    return 0;
  } else {
    return Math.max(...height) - k;
  }
}
