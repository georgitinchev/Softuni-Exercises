function solve(input) {
  let regex = /(=|\/)([A-Z][A-Za-z]{2,})\1/gm;
  let arr = [];
  let travelPoints = 0;
  let match = input.match(regex);
  if (match) {
    match.forEach((element) => {
      return arr.push(element.substring(1, element.length - 1));
    });
    for (let destination of arr) {
      travelPoints += Number(destination.length);
    }
  }
  console.log(`Destinations: ${arr.join(", ")}`);
  console.log(`Travel Points: ${travelPoints}`);
}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");

// 1. A valid location is surrounded by "=" or "/"
// 2. After the first "=" or "/" there should be only letters (first Uppercase, others lower or upper)
// 3. letters must be atleast 3
// 4. after matching all valid locations, calculate travel points. They are calculated by summing the lenghts of all destinations
