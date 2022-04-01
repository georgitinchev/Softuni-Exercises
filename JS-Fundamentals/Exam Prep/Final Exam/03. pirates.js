function solve(input) {
  let obj = {};
  let firstLine = input.shift().split("||");

  while (firstLine != "Sail") {
    let [city, population, gold] = firstLine;
    population = Number(population);
    gold = Number(gold);
    if (obj.hasOwnProperty(city)) {
      obj[city][0] += population;
      obj[city][1] += gold;
    } else {
      obj[city] = [population, gold];
    }
    firstLine = input.shift().split("||");
  }

  let secondLine = input.shift().split("=>");
  while (secondLine != "End") {
    let [event, city, peopleOrGold, gold] = secondLine;
    peopleOrGold = Number(peopleOrGold);
    gold = Number(gold);
    if (event == "Plunder") {
      obj[city][0] -= peopleOrGold;
      obj[city][1] -= gold;
      console.log(
        `${city} plundered! ${gold} gold stolen, ${peopleOrGold} citizens killed.`
      );
      if (obj[city][0] == 0 || obj[city][1] == 0) {
        delete obj[city];
        console.log(`${city} has been wiped off the map!`);
      }
    }
    if (event == "Prosper") {
      if (Math.sign(peopleOrGold) == 1) {
        obj[city][1] += peopleOrGold;
        console.log(
          `${peopleOrGold} gold added to the city treasury. ${city} now has ${obj[city][1]} gold.`
        );
      } else if (
        Math.sign(peopleOrGold) == -1 ||
        Math.sign(peopleOrGold) == -0
      ) {
        console.log(`Gold added cannot be a negative number!`);
      }
    }
    secondLine = input.shift().split("=>");
  }
  let entries = Object.entries(obj);
  if (Object.keys(obj).length != 0) {
    console.log(
      `Ahoy, Captain! There are ${
        Object.keys(obj).length
      } wealthy settlements to go to:`
    );
    entries.forEach((element) => {
      console.log(
        `${element[0]} -> Population: ${element[1][0]} citizens, Gold: ${element[1][1]} kg`
      );
    });
  } else {
    console.log(
      `Ahoy, Captain! All targets have been plundered and destroyed!`
    );
  }
}
solve([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
