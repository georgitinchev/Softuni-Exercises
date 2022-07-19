function getInfo() {
  // 1. get all elements needed by id
  // 2. fetch the data from server
  // 3. forEach bus create a li element with text
  // 4. append li tags to the ul
  let baseUrl = "http://localhost:3030/jsonstore/bus/businfo";
  let inputElement = document.getElementById("stopId");
  let ulElements = document.getElementById("buses");
  let divElement = document.getElementById("stopName"); // selecting all elements within the DOM

  fetch(`${baseUrl}/${inputElement.value}`) // send a GET request to baseUrl/inputField's value
    .then((response) => response.json()) // convert response to json()
    .then((data) => {
      // then json's buses is equal to a variable called buses
      let buses = data.buses;
      // the name variable is assigned to json's name property
      let name = data.name;

      divElement.textContent = name; // divElemenet's textContent equal to name
      ulElements.innerHTML = ""; // empty ulElements's inner html
      Object.keys(buses).forEach((bus) => {
        // for each bus within the buses array
        let liElement = document.createElement("li"); // create a li element
        liElement.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`; // liElement's textContent is equal to a string with the bus inside of it also with the time
        // the time within  the object is stored in the format bus: time
        ulElements.appendChild(liElement); // append the liElement to the ulElements
      });
    })
    .catch((error) => {
      // in case an error occurs change the textContent of divElement to Error
      divElement.textContent = "Error";
      // set ulElements's innerHTML to blank
      ulElements.innerHTML = "";
    });
}
