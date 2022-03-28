function solve(arr) {
    let keySeq = arr.shift().split(" ").map(Number);
    let newArr = [];
    for (let el of arr) {
      if (el == "find") {
        break;
      }
      let counter = 0;
      for (let i = 0; i < el.length; i++) {
        let currCharCode = el[i].charCodeAt();
        for (let j = 0; j < keySeq.length; j++) {
          j = counter;
          if (j == keySeq.length) {
            j = 0;
            counter = 0;
          }
          let currKeyCode = keySeq[j];
          currCharCode = currCharCode -= currKeyCode;
          counter++;
          break;
        }
        let pushEl = String.fromCharCode(currCharCode);
        newArr.push(pushEl);
      }
    }
    let sentence = newArr.join("");
    newArr = [];
    for (let i = 0; i < sentence.length; i++) {
      let curr = sentence.charAt(i);
      if (curr == "&") {
        newArr.push(i);
      } else if (curr == "<") {
        newArr.push(i);
      } else if (curr == ">") {
        newArr.push(i);
      }
    }
    for (let i = 0; i < newArr.length; i += 4) {
      let ore = sentence.substring(newArr[i] + 1, newArr[i + 1]);
      let coords = sentence.substring(newArr[i + 2] + 1, newArr[i + 3]);
      console.log(`Found ${ore} at ${coords}`);
    }
  }