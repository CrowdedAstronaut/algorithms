//My solution
function filterString(txt) {
  let upper = 0;
  let lower = 0;
  let number = 0;
  let special = 0;

  for (let i = 0; i < txt.length; i++) {
    if (txt[i] >= "A" && txt[i] <= "Z") upper++;
    else if (txt[i] >= "a" && txt[i] <= "z") lower++;
    else if (txt[i] >= "0" && txt[i] <= "9") number++;
    else special++;
  }
  return [upper, lower, number, special];
}

//Edabit solutions - good one with Regex
function filterString(txt) {
  let u = txt.match(/[A-Z]/g).length;
  let l = txt.match(/[a-z]/g).length;
  let n = txt.match(/\d/g).length;
  let s = txt.match(/\W/g).length;
  return [u, l, n, s];
}
