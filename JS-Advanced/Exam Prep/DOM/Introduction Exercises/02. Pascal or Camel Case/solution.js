function solve() {
  const data = {
      case: document.getElementById("naming-convention").value, // condition Pascal or Camel input field
      str: document.getElementById("text").value, // => text to convert
      resultSpan: document.getElementById("result"), // the result span to append the result to.
  }
  const result = data.str 
      .split(" ")
      .map(x => x.toLocaleLowerCase())
      .map(x => `${x.charAt(0).toLocaleUpperCase()}${x.slice(1)}`)
      .join("") // create the result string by making every element all lowercase then all charcters of separate elements at index 0 
      // prepend to uppercase and sum together

  if (data.case !== "Camel Case" && data.case !== "Pascal Case") {
      data.resultSpan.innerHTML = "Error!" // if condition is neither return Error!
  } else {
      data.resultSpan.innerHTML =
          data.case === "Pascal Case"
              ? result
              : `${result.charAt(0).toLocaleLowerCase()}${result.slice(1)}` // ternary operator to diferentiate between pascal/camel
  }
}