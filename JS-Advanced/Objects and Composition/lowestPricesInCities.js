function solve(input) {
  let obj = {};
  for (let line of input) {
    let [town, product, price] = line.split(" | ");
    price = Number(price);
    if (!obj.hasOwnProperty(product)) {
      obj[product] = [price, town];
    } else if (obj.hasOwnProperty(product)) {
      if (obj[product][0] > price) {
        obj[product] = [price, town];
      }
    }
  }
  let entries = Object.entries(obj);
  for (let entry of entries) {
    console.log(`${entry[0]} -> ${entry[1][0]} (${entry[1][1]})`);
  }
}
solve([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
