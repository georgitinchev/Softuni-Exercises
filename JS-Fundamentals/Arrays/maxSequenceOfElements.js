function maxSequence(arr) {
  // 1 - creating two empty arrays
  let newArray = []; // the final seq
  let firstArray = []; // secondary array saving the current longest sequence
  for (let i = 0; i < arr.length; i++) {
    // for loop till arr.length
    firstArray = []; // on every step refresh the array
    for (let j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        firstArray.push(arr[j]);
      } else {
        break;
      }
      if (firstArray.length > newArray.length) {
        newArray = firstArray;
      }
    }
  }
  console.log(newArray.join(" "));
}
