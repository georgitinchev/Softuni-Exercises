function solve(arr) {
  let initArr = [];
  let counter = 0;
  for (let command of arr) {
    counter++;
    if (command == "add") {
      initArr.push(counter);
    }
    if (command == "remove") {
      initArr.pop();
    }
  }
  if (initArr.length > 0) {
    console.log(initArr.join("\n"));
  } else {
    console.log("Empty");
  }
}
solve(["add", "add", "add", "add"]);
solve(["add", "add", "remove", "add", "add"]);
solve(["remove", "remove", "remove"]);
