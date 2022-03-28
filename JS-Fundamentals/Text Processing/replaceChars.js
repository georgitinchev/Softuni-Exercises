function solve(str) {
    let unique = "";
    for (let i = 0; i < str.length; i++) {
      let currChar = str.charAt(i);
      let nextChar = str.charAt(i + 1);
      if (currChar !== nextChar) {
        unique += currChar;
      }
    }
    console.log(unique);
  }