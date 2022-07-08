function warnTheSheep(queue) {
  let array = queue.reverse();
  for (let i = 0; i < array.length; i++) {
    if (array[0] === "wolf") {
      return "Pls go away and stop eating my sheep";
    } else if (array[i] === "wolf") {
      return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`;
    }
  }
}

console.log(
  warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"])
);
