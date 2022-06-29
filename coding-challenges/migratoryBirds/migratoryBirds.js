const migratoryBirds = (arr) => {
  let seenBirds = {};

  arr.forEach((bird) => {
    if (!seenBirds[bird]) {
      seenBirds[bird] = 1;
    }
    seenBirds[bird]++;
  });

  let birdId = 999;
  let total = 0;

  for (let key in seenBirds) {
    if (seenBirds[key] > total) {
      total = seenBirds[key];
      birdId = key;
    } else if (seenBirds[key] == total) {
      if (birdId > key) {
        birdId = key;
      }
    }
  }
  return birdId;
};
migratoryBirds([1, 4, 4, 4, 5, 3]);
