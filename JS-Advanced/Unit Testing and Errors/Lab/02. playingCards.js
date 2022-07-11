function cardFactory(f, s) {
  const faces = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: "J",
    Q: "Q",
    K: "K",
    A: "A",
  }; // create object that contains all the elements of the cards in its own object
  const suits = { S: "\u2660", H: "\u2665", D: "\u2666", C: "\u2663" }; // associate every key with the respectful image
  const setter = (c, e) => {
    // if index of e is not contained within c throw error
    if (!c[e]) throw new Error();
    return c[e];
  };
  let [face, suit] = [setter(faces, f), setter(suits, s)]; // face and suit are equal to setter return value

  const card = { face, suit, toString: () => `${face}${suit}` }; // create the variable for a card

  Object.defineProperties(card, {
    // defineProperties directly defines the properties within creating a new object
    face: {
      get() {
        // get
        return face;
      },
      set: (f) => setter(faces, f), //
    },
    suit: {
      get() {
        return suit;
      },
      set: (s) => setter(suits, s),
    },
  });

  return card;
}

module.exports = { solve };
