function solve(arr) {
    // Objective: function which takes serialized string and deserializes it
    // 1. create empty arr
    let stringArr = [];
    // 2. while the array still has elements in it loop
    while (arr.length > 0) {
      // 3. current element is shifted from arr
      let curr = arr.shift();
      // 4. if curr is end break out of the while
      if (curr == "end") {
        break;
        // otherwise declare the char, and the array of indexes
      } else {
        let [char, temp] = curr.split(":");
        // map the indexes to numbers
        let indexArr = temp.split("/").map(Number);
        // loop around indexArr and replace the element of index inside of stringArr with the char
        for (let i = 0; i < indexArr.length; i++) {
          stringArr[indexArr[i]] = char;
        }
      }
    }
    // log the stringArr joined by nothing
    console.log(stringArr.join(""));
  }