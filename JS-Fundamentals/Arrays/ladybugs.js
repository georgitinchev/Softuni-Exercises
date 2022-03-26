function solve(input) {
  let n = input.shift();
  let field = new Array(n).fill(0);
  let ladyBugIndexes = input.shift().split(" ");
  for (let index of ladyBugIndexes) {
    index = Number(index);
    if (field[index] != undefined) {
      field[index] = 1;
    }
  }
  for (let command of input) {
    let tokens = command.split(" ");
    let startingIndex = Number(tokens[0]);
    if (field[startingIndex] == 1) {
      let currentIndex = startingIndex;
      let direction = tokens[1];
      let offset = Number(tokens[2]);
      if (direction == "left") {
        offset *= -1;
      }
      while (
        currentIndex >= 0 &&
        currentIndex < n &&
        field[currentIndex] == 1
      ) {
        currentIndex += offset;
      }
      field[startingIndex] = 0;
      if (currentIndex >= 0 && currentIndex < n) {
        field[currentIndex] = 1;
      }
    }
  }
  console.log(field.join(" "));
}
solve([5, "3", "3 left 2", "1 left -2"]);
