function solve() {
  const html = {
    textField: document.getElementById("input"),
    outputDiv: document.getElementById("output"),
  } //html object with input and outputDiv
  const workArr = html.textField.value.split(".").filter(x => x.length >= 1).map(x => x.trim());
 // the array with the sentences, filtered for length >= 1 and trimmed
  const tagTemplate = (tag,text) => `<${tag}>${text}</${tag}>` // creating the tag function
  let tempIndex = 0; // index for measuring sentence count

  html.outputDiv.innerHTML = workArr.reduce((a,v,i) => { // the innerHtml is equal to the reduced value of workArr
    if (i % 3 === 0 && i !== 0) tempIndex += 1 //if the index is not 3 and its not 0 add 1 to it
    a[tempIndex] = (a[tempIndex] || "") + `${v}.` // the  array at index counter is equal to either itself or empty string + v
    return a // return that element
  }, []).map(x => tagTemplate("p",x)).join("\n") //  
}