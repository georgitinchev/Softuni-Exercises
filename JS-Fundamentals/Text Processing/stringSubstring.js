function solve(word, text) {
    let wordArr = text.split(" ");
    let bool = true;
    for (let el of wordArr) {
      if (el.localeCompare(word, undefined, { sensitivity: "base" }) == 0) {
        console.log(word);
        bool = false;
      }
    }
    if (bool) {
      console.log(`${word} not found!`);
    }
  }