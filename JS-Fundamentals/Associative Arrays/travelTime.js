function travelTime(arr) {
  let destinations = {};

  function travelCost(town1, town2, destination, country) {
    let priceOne = destination[country][town1];
    let priceTwo = destination[country][town2];

    return priceOne - priceTwo;

    // take in town1,town2,destination and country
    // priceOne is equal to the country,town1
    // priceTwo is equal to the country,town2
  }

  for (let line of arr) {
    let [country, town, cost] = line.split(" > ").filter((e) => e !== "");
    cost = Number(cost);
    town = town[0].toUpperCase() + town.slice(1);
    // we always check to make sure town's first letter is uppercased
    if (!destinations.hasOwnProperty(country)) {
      destinations[country] = {};
    } //if destinations has doesn't have the country as a property, assign it
    if (!destinations[country].hasOwnProperty(town)) {
      destinations[country][town] = cost;
    } //if destinations doesn't have town as a property assign it with the appropriate price
    let prevPrice = destinations[country][town];
    if (prevPrice > cost) {
      destinations[country][town] = cost;
    }
    // if the new price in the current iteration is more than the last, replace it.
  }

  let orderedCountries = [...Object.keys(destinations)].sort((a, b) =>
    a.localeCompare(b)
  ); // ordered countries is an array of keys inside of destinations sorted alphabetically
  let result = ""; // result is an empty string
  for (let country of orderedCountries) {
    //country in ordered countries add each to the empty string with an arrow after it.
    result += country + " -> ";
    let sortedPrices = [...Object.keys(destinations[country])].sort((a, b) =>
      travelCost(a, b, destinations, country)
    );
    for (let town of sortedPrices) {
      result += `${town} -> ${destinations[country][town]} `;
    }
    result += "\n";
  }
  console.log(result);
}
