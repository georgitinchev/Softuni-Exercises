function solve(text) {
    let firstHalf = text
      .slice(0, text.length / 2)
      .split("")
      .reverse()
      .join("");
    let secondHalf = text
      .slice(text.length / 2)
      .split("")
      .reverse()
      .join("");
  
    console.log(firstHalf);
    console.log(secondHalf);
  }