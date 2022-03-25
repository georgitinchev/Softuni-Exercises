function solve(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.includes(arr[i])) {
      continue;
    } else {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr.join(" "));
}
