function solve(input) {
  let obj = {};
  for (let element of input) {
    element = element.split(" : ");
    element[1] = Number(element[1]);
    let [product, price] = element;
    let letter = element[0].charAt(0);
    if (!obj.hasOwnProperty(letter)) {
      obj[letter] = [[product, price]];
    } else {
      obj[letter].push([product, price]);
    }
  }
  let entries = Object.entries(obj);
  entries.sort(function (a, b) {
    a = a[0];
    b = b[0];
    if (a > b) {
      return 1;
    }
    if (b > a) {
      return -1;
    }
    return 0;
  });
  for (let entry of entries) {
    console.log(entry[1][1]);
  }
}
solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
