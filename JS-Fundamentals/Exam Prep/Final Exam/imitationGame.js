function solve(input) {
  let encrypted = input.shift().split("");
  let currLine = input.shift();
  while (currLine != "Decode") {
    let [command, par1, par2] = currLine.split("|");
    if (command == "Move") {
      for (let i = 0; i < par1; i++) {
        encrypted.push(encrypted.shift());
      }
      encrypted.join("");
    } else if (command == "Insert") {
      encrypted.splice(par1, 0, par2);
    } else if (command == "ChangeAll") {
      encrypted = encrypted.join("");
      encrypted = encrypted.replaceAll(par1, par2);
      encrypted = encrypted.split("");
    }
    currLine = input.shift();
  }
  console.log(`The decrypted message is: ${encrypted.join("")}`);
}
// solve(["owyouh", "Move|2", "Move|3", "Insert|3|are", "Insert|9|?", "Decode"]);
solve(["owyouh", "Move|2", "Move|3", "Insert|3|are", "Insert|9|?", "Decode"]);
