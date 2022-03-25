function max(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    let isTop = true;
    for (let j = i + 1; j < arr.length; j++) {
      let next = arr[j];
      if (curr <= next) {
        isTop = false;
        break;
      }
    }
    if (isTop) {
      newArr.push(curr);
    }
  }
  console.log(newArr.join(" "));
}
