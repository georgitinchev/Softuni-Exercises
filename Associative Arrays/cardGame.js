function solve(arr) {
  //1. create objects containing powers & type
  let obj = {};
  let cardsMapper = {
    powerOb: {
      J: 11,
      Q: 12,
      K: 13,
      A: 14,
    },
    typeOb: {
      S: 4,
      H: 3,
      D: 2,
      C: 1,
    },
  };
  // 2. we create a for of loop
  for (let el of arr) {
    let [player, cards] = el.split(": ");

    if (!obj[player]) {
      obj[player] = new Set(cards.split(", ")); // if object doesn't contain player , create a new set within Obj with the cards array
    } else {
      // otherwise if it has player within the object just add the unexisting cards and discard the rest
      cards.split(", ").forEach((card) => {
        obj[player].add(card);
      });
    }
  }

  // 3. create a Object.keys array and for each key log key: totalPower
  Object.keys(obj).forEach((key) => {
    console.log(`${key}: ${totalPower(obj[key])}`);
  });

  //4. declare a totalPower nested function that solves for power;
  function totalPower(cardSet) {
    let totalSum = 0; //5. declare totalSum variable

    cardSet.forEach((card) => {
      let tokens = card.split("");
      let type = tokens.pop();
      let power = tokens.join("");

      let p = 0; //6. declare power variable and set it to 0, ( it will take up value from power,type objects)

      if (!cardsMapper.powerOb[power]) {
        // if power token is not contained within the object use the value of it converted to Number
        p = Number(power);
      } else {
        // otherwise take the value of p from the object and set it to that
        p = cardsMapper.powerOb[power];
      }
      //After power checks and all of that,add to totalSum power * type taken from the second 't' object
      totalSum += p * cardsMapper.typeOb[type];
    });
    return totalSum; // return totalSum wwhich goes into the Object.keys loop
  }
}
