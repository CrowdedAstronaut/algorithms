function perfectRoots(n) {
  let second = Math.sqrt(n);
  let fourth = Math.sqrt(second);
  let eighth = Math.sqrt(fourth);
  return (
    Number.isInteger(second) &&
    Number.isInteger(fourth) &&
    Number.isInteger(eighth)
  );
}

function perfectRoots(n) {
  let _2nd = Math.sqrt(n);
  let _4th = Math.sqrt(_2nd);
  let _8th = Math.sqrt(_4th);
  return Number.isInteger(_2nd + _4th + _8th);
}

let perfectRoots = (n) => Math.sqrt(n) % 1 == 0;
