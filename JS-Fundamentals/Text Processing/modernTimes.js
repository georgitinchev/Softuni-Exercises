function solve(str) {
    let wordArr = str.split(" ");
    function wordCheck(word) {
      word = word.substring(1, word.length);
      word = word.toUpperCase();
      let bool = true;
      for (let i = 0; i < word.length; i++) {
        if (word.charCodeAt(i) < 65 || word.charCodeAt(i) > 90) {
          bool = false;
          break;
        } else {
          continue;
        }
      }
      return bool;
    }
    //Conditions 1. must include # at start 2. length must be more than 1 3. must consist only of letters
    for (let i = 0; i < wordArr.length; i++) {
      let element = wordArr[i];
      if (element.startsWith("#") && element.length > 1) {
        if (!wordCheck(element)) {
          continue;
        } else {
          let el = element.substring(1, element.length);
          console.log(el);
        }
      }
    }
  }