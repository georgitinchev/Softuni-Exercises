function create(arr) {
  const elements = [];
  const output = document.getElementById("content");

  function eFactory(tag, content = "") {
    const temp = document.createElement(tag);
    temp.innerHTML = content;

    return temp;
  } // creates element, sets innerhtml to "";

  arr.forEach((x) => {
    // for each element of the array
    const div = eFactory("div"); // create a div
    const p = eFactory("p", x); // create a paragraph and add the element to it
    p.style.display = "none"; // hide the visibility of the paragraph

    div.appendChild(p); // append the paragraph to the div we just created
    div.addEventListener("click", () => (p.style.display = "block")); // add listener for whenever we click reveal the paragraph within the div
    elements.push(div); // push the div inside of the elements array
  });

  elements.forEach((x) => output.appendChild(x)); //on each element from the elements append to the output div
}
