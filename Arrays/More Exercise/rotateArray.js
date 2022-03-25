function rotateArr(arr) {
  let rotations = Number(arr.pop());
  for (let i = 1; i <= rotations; i++) {
    let lastElement = arr.pop();
    arr.unshift(lastElement);
  }
  console.log(arr.join(" "));
}
