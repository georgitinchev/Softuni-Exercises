function solve(arr) {
    let asciiSum = 0;
    let firstEl = arr[0].charCodeAt();
    let secondEl = arr[1].charCodeAt();
    let string = arr[2];
    if (firstEl > secondEl) {
      let temp = firstEl;
      firstEl = secondEl;
      secondEl = temp;
    }
    for (let letter of string) {
      let letterCode = letter.charCodeAt();
      if (letterCode > firstEl && letterCode < secondEl) {
        asciiSum = asciiSum += letterCode;
      }
    }
    console.log(asciiSum);
  }