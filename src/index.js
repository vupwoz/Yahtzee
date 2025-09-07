// Example Yahtzee game logic (basic template)
const root = document.getElementById('root');

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollAllDice() {
  let dice = [];
  for (let i = 0; i < 5; i++) {
    dice.push(rollDice());
  }
  return dice;
}

function displayDice(dice) {
  root.innerHTML = `
    <h1>Yahtzee</h1>
    <p>Dice: ${dice.join(', ')}</p>
    <button id="roll">Roll Again</button>
  `;
  document.getElementById('roll').addEventListener('click', () => {
    displayDice(rollAllDice());
  });
}

// Initial render
displayDice(rollAllDice());
