function getInfo() {
  let baseUrl = "http://localhost:3030/jsonstore/bus/businfo"; // baseUrl
  let inputElement = document.getElementById("stopId"); // input element selected from dom
  let ulElements = document.getElementById("buses"); // ul elements with id buses selected
  let divElement = document.getElementById("stopName"); // div element with id stopName selected

  fetch(`${baseUrl}/${inputElement.value}`) // send a fetch to baseUrl at inputField's value
    .then((response) => response.json()) // parse the response to json.
    .then((data) => {
      // create 2 variables buses and name and set them to keys within the json object
      let buses = data.buses;
      let name = data.name;

      divElement.textContent = name; //  div's textContent is set to the name variable
      ulElements.innerHTML = ""; // ul's innerHTML is blank
      Object.keys(buses).forEach((bus) => {
        // for each bus of buses create a new li
        let liElement = document.createElement("li");
        liElement.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`; // set the textContent of the li to bus will arrive in buses[bus] time
        ulElements.appendChild(liElement); // append to the ulElements that we just emptied
      });
    })
    .catch((error) => {
      // if any of the .thens crash return a error within divElements and empty ulElements
      divElement.textContent = "Error";
      ulElements.innerHTML = "";
    });
}
