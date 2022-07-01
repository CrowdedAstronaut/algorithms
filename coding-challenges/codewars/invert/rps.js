const rps = (p1, p2) =>
  p1 === p2
    ? "Draw!"
    : (p1 === "rock" && p2 === "scissors") ||
      (p1 === "scissors" && p2 === "paper") ||
      (p1 === "paper" && p2 === "rock")
    ? "Player 1 won!"
    : "Player 2 won!";
