function attachEvents() {
  let inputElement = document.getElementById("location");
  let getButton = document.getElementById("submit");
  let divDisplay = document.getElementById("forecast");
  let currentDiv = document.getElementById("current");
  let upcomingDiv = document.getElementById("upcoming");
  let baseUrl = `http://localhost:3030/jsonstore/forecaster`;
  let symbols = {
    sunny: "&#x2600",
    partlySunny: "&#x26C5",
    overcast: "&#x2601",
    rain: "&#x2614",
    degrees: "&#176",
  };
  let divElementUpcoming = document.createElement("div");
  let divElementCurrent = document.createElement("div");

  getButton.addEventListener("click", (e) => {
    e.preventDefault();
    divElementUpcoming.innerHTML = "";
    divElementCurrent.innerHTML = "";
    divElementUpcoming.setAttribute("class", "forecast-info");
    divElementCurrent.setAttribute("class", "forecasts");
    divDisplay.style.display = "inline";
    fetch(`${baseUrl}/locations`)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((e) => {
          if (e.name === inputElement.value) {
            fetch(`http://localhost:3030/jsonstore/forecaster/today/${e.code}`)
              .then((response) => response.json())
              .then((data) => {
                let [symbol1, degrees] = "";
                degrees = symbols.degrees;
                let condition = data.forecast.condition;
                let lowTemp = data.forecast.low;
                let highTemp = data.forecast.high;
                if (condition == "Sunny") {
                  symbol1 = symbols.sunny;
                } else if (condition == "Partly sunny") {
                  symbol1 = symbols.partlySunny;
                } else if (condition == "Overcast") {
                  symbol1 = symbols.overcast;
                } else if (condition == "Rain") {
                  symbol1 = symbols.rain;
                }
                divElementCurrent.innerHTML = `<span class="condition symbol">${symbol1}</span>
                <span class="condition">
                         <span class="forecast-data">${data.name}</span>
                         <span class="forecast-data">${lowTemp}${degrees}/${highTemp}${degrees}</span>
                </span>`;
                currentDiv.appendChild(divElementCurrent);
              })
              .catch((error) => console.log(error));
            fetch(
              `http://localhost:3030/jsonstore/forecaster/upcoming/${e.code}`
            )
              .then((response) => response.json())
              .then((data) => {
                const locationName = data.name;
                data.forecast.forEach((e) => {
                  let spanUpcoming = document.createElement("span");
                  spanUpcoming.setAttribute("class", "upcoming");
                  // low, high, condition
                  let [symbol1, degrees] = "";
                  const condition = e.condition;
                  degrees = symbols.degrees;
                  if (condition == "Sunny") {
                    symbol1 = symbols.sunny;
                  } else if (condition == "Partly sunny") {
                    symbol1 = symbols.partlySunny;
                  } else if (condition == "Overcast") {
                    symbol1 = symbols.overcast;
                  } else if (condition == "Rain") {
                    symbol1 = symbols.rain;
                  }
                  spanUpcoming.innerHTML = `<span class="symbol">${symbol1}</span>
                  <span class="forecast-data">${e.low}${degrees}/${e.high}${degrees}</span>
                  <span class="forecast-data">${e.condition}</span>`;
                  divElementUpcoming.appendChild(spanUpcoming);
                });
                upcomingDiv.appendChild(divElementUpcoming);
              })
              .catch((error) => console.log(error));
          }
        });
      });

    // fetch(`${baseUrl}/today/${code}`);
    // fetch(`${baseUrl}/upcoming/${code}`);
  });
}
attachEvents();
