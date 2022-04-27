String.prototype.toJadenCase = function () {
  // Code
  return this.split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};
