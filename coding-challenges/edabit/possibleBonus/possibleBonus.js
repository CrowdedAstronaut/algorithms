const possible = (a, b) => {
  for (let i = 1; i <= 6; i++) {
    a += 1;
    if (a === b) {
      return true;
    }
  }
  return false;
};
