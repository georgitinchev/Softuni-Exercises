function solve(input) {
  let stops = input.shift();
  for (let line of input) {
    let currLine = line.split(":");
    if (currLine[0] == "Add Stop") {
      stops = stops.split("");
      if (stops[currLine[1]] != undefined) {
        stops.splice(+currLine[1], 0, currLine[2]);
      }
      stops = stops.join("");
      console.log(stops);
    }
    if (currLine[0] == "Remove Stop") {
      let startIndex = +currLine[1];
      let endIndex = +currLine[2];
      if (stops[startIndex] && stops[endIndex]) {
        let start = stops.substring(0, startIndex);
        let end = stops.substring(endIndex + 1);
        stops = start + end;
      }
      console.log(stops);
    }
    if (currLine[0] == "Switch") {
      let oldString = currLine[1];
      let newString = currLine[2];
      if (stops.includes(oldString)) {
        stops = stops.replace(oldString, newString);
      }
      console.log(stops);
    }
    if (currLine[0] == "Travel") {
      console.log(`Ready for world tour! Planned stops: ${stops}`);
    }
  }
}
solve([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
