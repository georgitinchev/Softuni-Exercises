function solve(input) {
  // 1. Taking the waiting people and the array of wagons in the lift
  let waiting = Number(input.shift());
  let lift = input.shift().split(" ").map(Number);

  // 2. Function to check wether the lift has empty spots.
  function check(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[arr.length] != 4) {
        return true;
      } else {
        return false;
      }
    }
  }

  // 3. Logic loop
  for (let i = 0; i < lift.length; i++) {
    while (lift[i] < 4) {
      if (waiting < 1) {
        break;
      }
      waiting--;
      lift[i]++;
    }
  }
  // 4. Var to save the result from check function
  let checkIfEmpty = check(lift);
  // 5. Checks and logs
  if (checkIfEmpty == true && waiting == 0) {
    console.log(`The lift has empty spots!\n${lift.join(" ")}`);
  } else {
    console.log(
      `There isn't enough space! ${waiting} people in a queue!\n${lift.join(
        " "
      )}`
    );
  }
}
solve(["15", "0 0 0 0"]);
