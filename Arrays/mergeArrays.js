function merge(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (i % 2 === 0) {
      arr1[i] = Number(arr1[i]);
      arr2[i] = Number(arr2[i]);
      newArr.push(arr1[i] + arr2[i]);
    } else {
      newArr.push(arr1[i] + arr2[i]);
    }
  }
  console.log(newArr.join(" - "));
}
