function solve(arr) {
    // Serialize the string
    let string = arr[0]; // extract the string and set it equal to the input at index 0.
    let letters = []; // create an array for the letters.
    for (let letter of string) {
      // 1. Create array of possible characters without repeating.
      if (!letters.includes(letter)) {
        // if letter doesn't exist inside of letters, push it inside of it.
        letters.push(letter);
      }
      // Letters is now equal to all the possible chars inside of string
    }
    // 2. iterate through the string and look for indexes of possible characters, save them and print them
    while (letters.length > 0) {
      // while the length of the letters is more than 0 iterate again and again
      let char = letters.shift(); // take out 1 letter out of letters with shift and name it char(serves as the -- for the while)
      let indices = []; // create an array for the indices
  
      for (let i = 0; i < string.length; i++) {
        // for the whole length of the string iterate through it
        if (char === string[i]) {
          // if the char is equal to the stringChar at the current index, push the index inside of indices
          indices.push(i);
        }
      }
  
      console.log(char + ":" + indices.join("/")); // console log the char + ":" + the indices joined by a "/"
      // iterate again
    }
  }