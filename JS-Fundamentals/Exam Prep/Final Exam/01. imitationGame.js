function solve(input) {
  let message = input.shift();
  for (let line of input) {
    line = line.split("|");
    let command = line[0];
    if (command == "Move") {
      let n = +line[1];
      let substr1 = message.slice(0, n);
      let substr2 = message.slice(n);
      message = substr2 + substr1;
    }
    if (command == "Insert") {
      let index = +line[1];
      let insertValue = line[2];
      let substr1 = message.slice(0, index);
      let substr2 = message.slice(index);
      message = substr1 + insertValue + substr2;
    }
    if (command == "ChangeAll") {
      let substr = line[1];
      let replacement = line[2];
      message = message.split(substr).join(replacement);
    }
    if (command == "Decode") {
      console.log(`The decrypted message is: ${message}`);
    }
  }
}
// solve(["owyouh", "Move|2", "Move|3", "Insert|3|are", "Insert|9|?", "Decode"]);
solve(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
