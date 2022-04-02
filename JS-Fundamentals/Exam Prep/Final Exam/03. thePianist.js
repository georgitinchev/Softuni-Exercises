function solve(input) {
  let nPieces = Number(input.shift());
  let obj = {};
  for (let i = 0; i < nPieces; i++) {
    let curr = input.shift().split("|");
    let [piece, composer, key] = curr;
    obj[piece] = [composer, key];
  }
  for (let line of input) {
    line = line.split("|");
    let command = line[0];
    let piece = line[1];
    if (command == "Add") {
      let [composer, key] = [line[2], line[3]];
      if (obj.hasOwnProperty(piece)) {
        console.log(`${piece} is already in the collection!`);
      } else {
        obj[piece] = [composer, key];
        console.log(
          `${piece} by ${composer} in ${key} added to the collection!`
        );
      }
    }
    if (command == "Remove") {
      if (obj.hasOwnProperty(piece)) {
        delete obj[piece];
        console.log(`Successfully removed ${piece}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    }
    if (command == "ChangeKey") {
      if (obj.hasOwnProperty(piece)) {
        let key = line[2];
        obj[piece][1] = key;
        console.log(`Changed the key of ${piece} to ${key}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    }
    if (command == "Stop") {
      let entries = Object.entries(obj);
      entries.forEach((el) => {
        console.log(`${el[0]} -> Composer: ${el[1][0]}, Key: ${el[1][1]}`);
      });
    }
  }
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
