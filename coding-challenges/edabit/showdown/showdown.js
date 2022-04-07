const showdown = (p1, p2) => {
  let arr1 = p1.split(" ");
  let arr2 = p2.split(" ");
  if (arr1.indexOf("B") < arr2.indexOf("B")) {
    return "p1";
  } else if (arr1.length == arr2.length) {
    return "tie";
  } else {
    return "p2";
  }
};
