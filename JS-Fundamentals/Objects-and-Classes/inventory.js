function inventory(arr) {
  let heroes = [];

  for (let element of arr) {
    // for every arr of strings
    element = element.split(" / ");

    let heroName = element.shift();
    let level = element.shift();
    let items = element.join("").split(", ");

    const hero = {
      name: heroName,
      level: Number(level),
      items: items,
    };

    heroes.push(hero);
    continue;
  }

  heroes.sort((a, b) => {
    return a.level - b.level;
  });

  for (let hero of heroes) {
    console.log(
      `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items.join(
        ", "
      )}`
    );
  }
}
