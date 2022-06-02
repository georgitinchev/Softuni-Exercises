function solve(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let product = arr[i];
    if (i % 2 == 0) {
      obj[product] = Number(arr[i + 1]);
    }
  }
  console.log(obj);
}
solve(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
