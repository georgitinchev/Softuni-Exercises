function login(input) {
  for (let i = 1; i < input.length; i++) {
    if (input[0].split("").reverse().join("") === input[i]) {
      console.log(`User ${input[0]} logged in.`);
    } else {
      if (i === input.length - 1) {
        console.log(`User ${input[0]} blocked!`);
      } else {
        console.log("Incorrect password. Try again.");
      }
    }
  }
}
