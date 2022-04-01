function solve(input) {
  let rawKey = input.shift();
  for (let line of input) {
    let currLine = line.split(">>>");
    let command = currLine[0];
    let substringOrDirection = currLine[1];
    if (command == "Generate") {
      break;
    }
    if (command == "Contains") {
      if (rawKey.includes(substringOrDirection)) {
        console.log(`${rawKey} contains ${substringOrDirection}`);
      } else {
        console.log("Substring not found!");
      }
    }
    if (command == "Flip") {
      let str = rawKey.substring(currLine[2], currLine[3]);
      if (substringOrDirection == "Upper") {
        let temp = str.toUpperCase();
        rawKey = rawKey.replace(str, temp);
        console.log(rawKey);
      }
      if (substringOrDirection == "Lower") {
        let temp = str.toLowerCase();
        rawKey = rawKey.replace(str, temp);
        console.log(rawKey);
      }
    }
    if (command == "Slice") {
      let str = rawKey.substring(substringOrDirection, currLine[2]);
      rawKey = rawKey.replace(str, "");
      console.log(rawKey);
    }
  }
  console.log(`Your activation key is: ${rawKey}`);
}

solve([
  "134softsf5ftuni2020rockz42",
  "Slice>>>3>>>7",
  "Contains>>>-rock",
  "Contains>>>-uni-",
  "Contains>>>-rocks",
  "Flip>>>Upper>>>2>>>8",
  "Flip>>>Lower>>>5>>>11",
  "Generate",
]);
// solve([
//   "abcdefghijklmnopqrstuvwxyz",
//   "Slice>>>2>>>6",
//   "Flip>>>Upper>>>3>>>14",
//   "Flip>>>Lower>>>5>>>7",
//   "Contains>>>def",
//   "Contains>>>deF",
//   "Generate",
// ]);
