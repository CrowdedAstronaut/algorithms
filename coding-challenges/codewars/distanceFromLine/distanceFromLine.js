function distanceFromLine([ax, ay], [bx, by], [cx, cy]) {
  return ax != bx || ay != by
    ? Math.abs(
        (bx - ax) * (ay - cy) - (ax - cx) * (by - ay)
      ) / Math.hypot(bx - ax, by - ay)
    : Math.hypot(cx - ax, cy - ay);
}
