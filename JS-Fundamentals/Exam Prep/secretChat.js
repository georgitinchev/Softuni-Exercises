function solve(input) {
  function reversedStr(str) {
    arr = str.split("");
    arr.reverse();
    return arr.join("");
  }
  let message = input.shift();
  for (let el of input) {
    let tokens = el.split(":|:");
    let [command, arg, replacement] = tokens;
    if (command == "Reveal") {
      break;
    } else if (command == "InsertSpace") {
      let singlespace = " ";
      message = message.split("");
      message.splice(arg, 0, singlespace);
      message = message.join("");
      console.log(message);
    } else if (command == "ChangeAll") {
      message = message.replaceAll(arg, replacement);
      console.log(message);
    } else if (command == "Reverse") {
      if (message.includes(arg)) {
        let reversed = reversedStr(arg);
        message = message.replace(arg, "");
        message = message.split("");
        for (let i = 0; i < reversed.length; i++) {
          message.push(reversed[i]);
        }
        message = message.join("");
        console.log(message);
      } else {
        console.log("error");
      }
    }
  }
  console.log(`You have a new text message: ${message}`);
}
