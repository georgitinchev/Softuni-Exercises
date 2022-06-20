function solve(input) {
  let arr = [];

  let obj = {
    add: (str) => arr.push(str),
    remove: (str) => {
      arr = arr.filter((x) => x !== str);
    },
    print: () => console.log(arr.join(",")),
  }; // obj with methods within it which utilize oop

  input.forEach((x) => {
    const [command, value] = x.split(" ");
    obj[command](value);
  }); // for each element of input, split by space
  // execute the command with the coresponding value
}
solve(["add hello", "add again", "remove hello", "add again", "print"]);
solve(["add pesho", "add george", "add peter", "remove peter", "print"]);
