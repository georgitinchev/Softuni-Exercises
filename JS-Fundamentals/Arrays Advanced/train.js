function train(arr) {
  let wagons = arr.shift().split(" ").map(Number);
  let maxCapacity = Number(arr.shift().split(" "));
  for (let i = 0; i < arr.length; i++) {
    let newArr = arr[i].split(" ");
    let command = newArr[0];
    let passengers = Number(newArr[1]);
    if (newArr.length === 2 && command == "Add") {
      wagons.push(passengers);
    } else {
      let newPassengers = Number(newArr[0]);
      for (let j = 0; j < wagons.length; j++) {
        if (wagons[j] + newPassengers <= maxCapacity) {
          wagons[j] += newPassengers;
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}
