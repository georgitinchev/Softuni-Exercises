function fruit(fruitName, weight, pricePerKg) {
  let kilograms = weight / 1000;
  let price = kilograms * pricePerKg;
  console.log(
    `I need $${price.toFixed(2)} to buy ${kilograms.toFixed(
      2
    )} kilograms ${fruitName}.`
  );
}
fruit("orange", 2500, 1.8);
fruit("apple", 1563, 2.35);
