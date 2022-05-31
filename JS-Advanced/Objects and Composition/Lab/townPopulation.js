function solve(input) {
  let obj = {};
  for (let i = 0; i < input.length; i++) {
    let [city, population] = input[i].split(" <-> ");
    population = Number(population);
    if (obj.hasOwnProperty(city)) {
      obj[city] += population;
    } else {
      obj[city] = population;
    }
  }
  for (let town in obj) {
    console.log(`${town} : ${obj[town]}`);
  }
}
solve([
  "Istanbul <-> 10000",
  "Istanbul <-> 234",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
