function solve(text) {
    let words = [];
    let currWord = text[0]; // S
    for (let i = 1; i < text.length; i++) {
      if (text[i].toUpperCase() !== text[i]) {
        currWord = currWord.concat(text[i]);
      } else {
        words.push(currWord);
        currWord = text[i];
      }
    }
    words.push(currWord);
    console.log(words.join(", "));
  }