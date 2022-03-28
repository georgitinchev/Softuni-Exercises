function solve(arr) {
    let asciiSum = 0;
    let string = arr.shift();
    let possible = arr.shift();
    for (let letter of string) {
      let index = string.indexOf(letter);
      if (
        (string.charCodeAt(index) >= 65 && string.charCodeAt(index) <= 90) ||
        (string.charCodeAt(index) >= 97 && string.charCodeAt(index) <= 122)
      ) {
        if (possible == "LOWERCASE") {
          if (string.charAt(index) == string.charAt(index).toLowerCase()) {
            asciiSum += string.charCodeAt(index);
          }
        } else if (possible == "UPPERCASE") {
          if (string.charAt(index) == string.charAt(index).toUpperCase()) {
            asciiSum += string.charCodeAt(index);
          }
        }
      } else {
        continue;
      }
    }
    console.log(`The total sum is: ${asciiSum}`);
  }