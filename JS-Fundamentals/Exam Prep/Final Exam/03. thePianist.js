function solve(input) {
  let n = Number(input.shift());
  let arrWithCommands = input.splice(n);
  let obj = {};

  for (let line of input) {
    let tokens = line.split("|");
    let [piece, composer, key] = tokens;
    obj[piece] = [composer, key];
  }

  for (let line of arrWithCommands) {
    let tokens = line.split("|");
    let command = tokens.shift();
    let piece = tokens.shift();

    if (command == "Add") {
      let composer = tokens.shift();
      let key = tokens.shift();
      if (obj.hasOwnProperty(piece)) {
        console.log(`${piece} is already in the obj!`);
      } else {
        obj[piece] = [composer, key];
        console.log(`${piece} by ${composer} in ${key} added to the obj!`);
      }
    }
    if (command == "Remove") {
      if (obj.hasOwnProperty(piece)) {
        delete obj[piece];
        console.log(`Successfully removed ${piece}!`);
      } else {
        console.log(`Invalid operation! ${piece} does not exist in the obj.`);
      }
    }
    if (command == "ChangeKey") {
      let key = tokens.shift();
      if (obj.hasOwnProperty(piece)) {
        obj[piece][1] = key;
        console.log(`Changed the key of ${piece} to ${key}!`);
      } else {
        console.log(`Invalid operation! ${piece} does not exist in the obj.`);
      }
    }
    if (command == "Stop") {
      break;
    }
  }
  let entries = Object.entries(obj);
  entries.forEach((el) =>
    console.log(`${el[0]} -> Composer: ${el[1][0]}, Key: ${el[1][1]}`)
  );
}
solve([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
