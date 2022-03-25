function gladiatorExpenses(lostFights, helmetPr, swordPr, shieldPr, armorPr) {
  let expenses = 0;
  let shieldCounter = 0;

  for (let i = 1; i <= lostFights; i++) {
    if (i % 2 == 0) {
      expenses += helmetPr;
    }
    if (i % 3 == 0) {
      expenses += swordPr;
    }
    if (i % 2 == 0 && i % 3 == 0) {
      expenses += shieldPr;
      shieldCounter++;
    }
    if (shieldCounter % 2 == 0 && shieldCounter > 0) {
      expenses += armorPr;
      shieldCounter = 0;
    }
  }
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
