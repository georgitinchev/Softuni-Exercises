function solve(input) {
  const suits = { S: "\u2660", H: "\u2665", D: "\u2666", C: "\u2663" };
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
  };
  let arr = [];

  input.forEach((element) => {
    element = element.split("");
    const length = element.length - 1;
    const char = element[length];
    if (
      suits.hasOwnProperty(char) &&
      (faces.hasOwnProperty(element[0]) ||
        faces.hasOwnProperty(`${element[0]}` + `${element[1]}`))
    ) {
      element[length] = suits[char];
      element = element.join("");
      arr.push(element);
    } else {
      throw Error(`Invalid card: ${element.join("")}`);
    }
  });
  console.log(arr.join(" "));
}
solve(["AS", "10D", "KH", "2C"]);
solve(["5S", "3D", "QD", "1C"]);
