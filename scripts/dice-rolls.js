function rollDice(number, sides) {
  let total = 0;
  for (let i = 0; i < number; i++) {
    total += Math.floor(Math.random() * sides) + 1;
  }
  return total;
}
