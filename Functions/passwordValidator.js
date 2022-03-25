function pass(password) {
  function isBetween(stringPass) {
    return stringPass.length >= 6 && stringPass.length <= 10;
  }

  function isOnlyLettersAndDigits(stringPass) {
    // "hello" => "h" "e" .... etc
    for (let currIndex of stringPass) {
      let currChar = currIndex.charCodeAt(0);
      if (
        !(currChar >= 48 && currChar <= 57) &&
        !(currChar >= 65 && currChar <= 90) &&
        !(currChar >= 97 && currChar <= 122)
      ) {
        return false;
      }
    }
    return true;
  }

  function isHavingAtleast2Digits(stringPass) {
    let count = 0;
    for (let el of stringPass) {
      let element = el.charCodeAt(0);
      if (element >= 48 && element <= 57) {
        count++;
      }
    }
    return count >= 2 ? true : false;
  }
  let isLengthValid = isBetween(password);
  let isOnlyLetAndDig = isOnlyLettersAndDigits(password);
  let isHavingAtleast = isHavingAtleast2Digits(password);

  if (isLengthValid && isOnlyLetAndDig && isHavingAtleast) {
    console.log("Password is valid");
  }
  if (!isLengthValid) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (!isOnlyLetAndDig) {
    console.log("Password must consist only of letters and digits");
  }
  if (!isHavingAtleast) {
    console.log("Password must have at least 2 digits");
  }
}
