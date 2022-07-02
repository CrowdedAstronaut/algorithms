function XO(str) {
  let array = str.split("");
  let XArray = [];
  let OArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() === "x") {
      XArray.push(array[i]);
    } else if (array[i].toLowerCase() === "o") {
      OArray.push(array[i]);
    }
    //code here
  }
  return XArray.length === OArray.length ? true : false;
}

XO("xo");
XO("xxOo");
XO("xxxm");
