function palinDrome(arr) {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let toString = arr[i].toString();
    let reversed = "";
    for (let j = toString.length - 1; j >= 0; j--) {
      reversed += toString[j];
    }
    reversed = Number(reversed);
    if (current === reversed) {
      console.log("true");
    } else if (current !== reversed) {
      console.log("false");
    }
  }
}
