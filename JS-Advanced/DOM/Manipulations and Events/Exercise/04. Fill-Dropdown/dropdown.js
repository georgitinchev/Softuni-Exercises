function addItem() {
  let input = document.getElementById("newItemText");
  let value = document.getElementById("newItemValue");
  let option = document.createElement("option");
  let select = document.getElementById("menu");
  option.textContent = input.value;
  option.value = value.value;
  input.value = "";
  value.value = "";
  select.appendChild(option);
}
// Your task is to take values from input
// fields with ids "newItemText" and "newItemValue".
// Then you should create and append an <option>
// to the <select> with id "menu".
