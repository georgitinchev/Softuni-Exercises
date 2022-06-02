function heroic(input) {
  // array to hold data
  let arr = [];
  // loop around input
  for (let element of input) {
    [heroName, heroLevel, items] = element.split(" / ");
    items = items ? items.split(", ") : [];
    heroLevel = Number(heroLevel);
    if (items.length != 0) {
      let obj = {
        name: heroName,
        level: heroLevel,
        items: items,
      };
      arr.push(obj);
    } else {
      let obj = {
        name: heroName,
        level: heroLevel,
      };
      arr.push(obj);
    }
  }
  return JSON.stringify(arr);
}
console.log(
  heroic([
    "Isacc / 25 / Apple, GravityGun",

    "Derek / 12 / BarrelVest, DestructionSword",

    "Hes / 1 / Desolator, Sentinel, Antara",
  ])
);
heroic(["Jake / 1000 / Gauss, HolidayGrenade"]);
