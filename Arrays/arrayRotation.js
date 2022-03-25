function rotation(arr1, rotr) {
  for (let i = 0; i < rotr; i++) {
    let element = arr1.shift();
    arr1.push(element);
  }
  console.log(arr1.join(" "));
}
