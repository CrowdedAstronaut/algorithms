const sing = () => {
  let bottles = "";
  let bottlesLeft = "";
  for (i = 99; i >= 1; i--) {
    if (i == 1) {
      bottles = "bottle";
      bottlesLeft = "Go to the store and buy some more,";
    } else {
      bottles = "bottles";
      bottlesLeft = i - 1 + " bottles of beer on the wall!";
    }
    return `${i} ${bottles} of beer on the wall, ${i} bottles of beer on the wall, ${i} bottles of beer, Take one down, pass it around, ${bottlesLeft}`;
  }
};
