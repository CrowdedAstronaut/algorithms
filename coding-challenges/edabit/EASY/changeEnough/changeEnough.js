function changeEnough(change, amountDue) {
  let quarters = change[0] * 0.25;
  let dimes = change[1] * 0.1;
  let nickels = change[2] * 0.05;
  let pennies = change[3] * 0.01;
  return quarters + dimes + nickels + pennies >= amountDue
    ? true
    : false;
}
