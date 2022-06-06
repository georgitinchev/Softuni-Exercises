function solve() {
  let first = document.getElementById("text").value;
  let second = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");
  if (second == "Camel Case") {
    first = first.toLowerCase();
    first = first.split(" ");
    for (let i = 1; i < first.length; i++) {
      let letter = first[i].charAt(0).toUpperCase();
      first[i] = first[i].split("");
      first[i][0] = letter;
      first[i] = first[i].join("");
    }
    first = first.join("");
    result.innerText = first;
  } else if (second == "Pascal Case") {
    first = first.toLowerCase();
    first = first.split(" ");
    for (let i = 0; i < first.length; i++) {
      let letter = first[i].charAt(0).toUpperCase();
      first[i] = first[i].split("");
      first[i][0] = letter;
      first[i] = first[i].join("");
    }
    first = first.join("");
    result.innerText = first;
  } else {
    result.innerText = "Error!";
  }
}
