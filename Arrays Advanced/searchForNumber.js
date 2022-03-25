function search(arr1, arr2) {
  let numbersToTake = Number(arr2[0]);
  let toDelete = Number(arr2[1]);
  let after = Number(arr2[2]);
  let newArr = [];
  let counter = 0;
  for (let i = 0; i < numbersToTake; i++) {
    newArr.push(arr1[i]);
  }
  newArr.splice(0, toDelete);
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] == after) {
      counter++;
      continue;
    }
  }
  console.log(`Number ${after} occurs ${counter} times.`);
}
