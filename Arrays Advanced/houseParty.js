function houseParty(input) {
  let list = [];
  for (let i = 0; i < input.length; i++) {
    let arr = input[i].split(" ");
    let name = arr[0];
    if (arr[2] == "going!" && list.includes(name) == false) {
      list.push(name);
    } else if (arr[2] == "going!" && list.includes(name)) {
      console.log(`${name} is already in the list!`);
    } else if (arr[2] == "not" && list.includes(name)) {
      let index = list.indexOf(name);
      list.splice(index, 1);
    } else if (arr[2] == "not" && list.includes(name) == false) {
      console.log(`${name} is not in the list!`);
    }
  }
  console.log(list.join("\n"));
}
