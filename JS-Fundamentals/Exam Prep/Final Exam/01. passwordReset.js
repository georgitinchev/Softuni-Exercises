function solve(input) {
  let raw = input.shift();
  let pass = "";
  for (let line of input) {
    let currLine = line.split(" ");
    let command = currLine[0];
    if (command == "Done") {
      console.log(`Your password is: ${pass}`);
    }
    if (command == "TakeOdd") {
      pass = [];
      for (let i = 0; i < raw.length; i++) {
        if (i % 2 != 0) {
          pass.push(raw[i]);
        }
      }
      pass = pass.join("");
      console.log(pass);
    }
    if (command == "Cut") {
      let indexStart = +currLine[1];
      let indexEnd = Number(currLine[1]) + Number(currLine[2]);
      let str = pass.substring(indexStart, indexEnd);
      pass = pass.replace(str, "");
      console.log(pass);
    }
    if (command == "Substitute") {
      if (pass.includes(currLine[1])) {
        let regex = new RegExp(currLine[1], "g");
        pass = pass.replace(regex, currLine[2]);
        console.log(pass);
      } else {
        console.log("Nothing to replace!");
      }
    }
  }
}
solve([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
// solve([
//   "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
//   "TakeOdd",
//   "Cut 18 2",
//   "Substitute ! ***",
//   "Substitute ? .!.",
//   "Done",
// ]);
