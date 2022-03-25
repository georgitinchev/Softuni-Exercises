function store(availableStock, deliveredStock) {
  let storedProducts = {};
  for (let i = 0; i < availableStock.length; i += 2) {
    let currProduct = availableStock[i]; // index 0;
    storedProducts[currProduct] = Number(availableStock[i + 1]); //index 1;
  }
  for (let i = 0; i < deliveredStock.length; i += 2) {
    let currProduct = deliveredStock[i];
    if (!storedProducts.hasOwnProperty(currProduct)) {
      storedProducts[currProduct] = 0;
    }
    storedProducts[currProduct] += Number(deliveredStock[i + 1]);
  }
  for (let [product, value] of Object.entries(storedProducts)) {
    console.log(`${product} -> ${value}`);
  }
}
