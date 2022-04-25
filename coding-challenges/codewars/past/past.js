function past(h, m, s) {
  //#Happy Coding! ^_^
  return h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;
}

//Cleaner Solution via Code Wars
function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}
