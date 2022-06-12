function solve() {
  let textArea = document.querySelector("body > div > textarea"); // selecting the textarea
  let totalPrice = 0; // we declare a variable for the totalPrice of products
  let listOfUniqueThings = []; // we declare an array for the unique products
  let addBtn = document.getElementsByClassName("add-product"); // we get the buttons object
  let arrayAddBtn = Array.from(addBtn); // we convert it to an array
  for (let i = 0; i < arrayAddBtn.length; i++) {
    // we loop around the array
    arrayAddBtn[i].addEventListener("click", function one() {
      let name = document.querySelector(
        `body > div > div:nth-child(${i + 2}) > div.product-details > div`
      ).textContent; // we get the textContent
      let price = document.querySelector(
        `body > div > div:nth-child(${i + 2}) > div.product-line-price`
      ).textContent; // we get the price
      if (!listOfUniqueThings.includes(name)) {
        // if the array of unique doesn't include the product add it
        listOfUniqueThings.push(name);
      }
      let result = `Added ${name} for ${price} to the cart.\n`; // create result string
      totalPrice += Number(price); // add the individual price to totalPrice
      textArea.value += result; // add the result to the textArea below the products
    });
  }
  let checkOut = document.querySelector("body > div > button"); // select the checkout button
  checkOut.addEventListener("click", function final() {
    // upon clicking checkout list the array of all products without repeating ones with the totalPrice
    let finalSting = `You bought ${listOfUniqueThings.join(
      ", "
    )} for ${totalPrice.toFixed(2)}.`;
    textArea.value += finalSting;
    disableButtons(); // disable the buttons afterwards using .disabled = true
  });

  function disableButtons() {
    let buttons = Array.from(document.querySelectorAll("button"));
    buttons.forEach((button) => (button.disabled = true)); // disable each button from the quweryselectorAll button
  }
}
