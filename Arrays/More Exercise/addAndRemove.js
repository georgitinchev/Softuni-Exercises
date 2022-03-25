function addRemove(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "remove") {
      newArr.pop();
    } else if (arr[i] === "add") {
      newArr.push(i + 1);
    }
  }
  if (!newArr.length) {
    console.log("Empty");
  } else {
    console.log(newArr.join(" "));
  }
}
