function dartsScoring(x, y) {
  let R = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  if (R > 10) {
    return 0;
  } else if (10 >= R && R > 5) {
    return 1;
  } else if (5 >= R && R > 1) {
    return 5;
  } else if (R <= 1) {
    return 10;
  }
}

//Edabit solution
function dartsScoring(x, y) {
  let r = Math.sqrt(x ** 2 + y ** 2);
  return r <= 1 ? 10 : r <= 5 ? 5 : r <= 10 ? 1 : 0;
}
