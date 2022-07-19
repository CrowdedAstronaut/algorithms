function bouncingBall(h, bounce, window) {
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    //start count at one because mom will see the ball at least once
    let count = 1;
    //initial height is the height multiplied by the bounce
    h = h * bounce;
    //while height is taller than the window keep condition running
    while (h > window) {
      //increase count by two because each time it bounces mom will see the
      //ball twice
      count += 2;
      //re-assign h to the new height each time the condition runs
      h = h * bounce;
    }
    return count;
  } else {
    return -1;
  }
}
console.log(bouncingBall(3.0, 1.0, 1.5));
// h > 0 && bounce > 0 && bounce < 1 && window < h
//   ? count
//   : -1;
