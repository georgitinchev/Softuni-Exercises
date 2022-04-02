function solve(input) {
  let cars = Number(input.shift());
  let inputComms = input.splice(cars);
  let obj = {};

  for (let line of input) {
    let curr = line.split("|");
    let car = curr[0];
    let mileage = Number(curr[1]);
    let fuel = Number(curr[2]);
    obj[car] = [mileage, fuel];
  }
  for (let el of inputComms) {
    let line = el.split(" : ");
    let command = line[0];

    if (command == "Drive") {
      let car = line[1];
      let distance = Number(line[2]);
      let fuel = Number(line[3]);

      if (obj[car][1] >= fuel) {
        obj[car][1] -= fuel;
        obj[car][0] += distance;
        console.log(
          `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
        );
        if (obj[car][0] >= 100000) {
          delete obj[car];
          console.log(`Time to sell the ${car}!`);
        }
      } else {
        console.log(`Not enough fuel to make that ride`);
      }
    }
    if (command == "Refuel") {
      let car = line[1];
      let currentFuel = Number(line[2]);
      let need = 75 - obj[car][1];

      if (currentFuel + obj[car][1] > 75) {
        obj[car][1] = 75;
        console.log(`${car} refueled with ${need} liters`);
      } else {
        obj[car][1] += currentFuel;
        console.log(`${car} refueled with ${currentFuel} liters`);
      }
    }
    if (command == "Revert") {
      let car = line[1];
      let kilometers = Number(line[2]);
      obj[car][0] -= kilometers;
      if (obj[car][0] < 10000) {
        obj[car][0] = 10000;
      } else {
        console.log(`${car} mileage decreased by ${kilometers} kilometers`);
      }
    }
    if (command == "Stop") {
      Object.entries(obj).forEach((element) => {
        console.log(
          `${element[0]} -> Mileage: ${element[1][0]} kms, Fuel in the tank: ${element[1][1]} lt.`
        );
      });
    }
  }
}
solve([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);
