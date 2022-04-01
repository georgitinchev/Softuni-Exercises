function solve(input) {
  let regex =
    /(#|\|)(?<item>[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*)\1(?<ExDate>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d+)\1/g;
  // Calculate total calories of all items and how many days you can last with it, you need 2000kcal to survive
  let arr = [];
  let total = 0;
  let daysSurvive = 0;
  const constCal = 2000;
  let executed;
  while ((executed = regex.exec(input)) != null) {
    let item = executed.groups["item"];
    let date = executed.groups["ExDate"];
    let calories = executed.groups["cal"];
    arr.push(`Item: ${item}, Best before: ${date}, Nutrition: ${calories}`);

    total += Number(calories);
  }
  daysSurvive = Math.floor(total / constCal);
  console.log(`You have food to last you for: ${daysSurvive} days!`);
  arr.forEach((element) => {
    console.log(element);
  });
}
solve([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
