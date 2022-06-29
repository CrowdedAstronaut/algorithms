const totalVolume = (...boxes) =>
  boxes.reduce((total, [l, w, h]) => total + l * w * h, 0);
