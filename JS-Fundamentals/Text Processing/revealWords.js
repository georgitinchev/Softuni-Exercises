function solve(word, censoredText) {
    let wordsArray = word.split(", ");
    let censoredArray = censoredText.split(" ");
    for (let i = 0; i < censoredArray.length; i++) {
      if (censoredArray[i].includes("*")) {
        let censoredWord = censoredArray[i];
        for (let j = 0; j < wordsArray.length; j++) {
          let curr = wordsArray[j];
          if (censoredWord.length === curr.length) {
            censoredArray.splice(i, 1, curr);
          }
        }
      }
    }
    console.log(censoredArray.join(" "));
  }