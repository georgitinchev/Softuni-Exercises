function getInfo() {
  const data = {
    button: document.getElementById("submit"),
    http: new XMLHttpRequest(),
    busId: document.getElementById("stopId").value,
  };
  const requestStr = `http://localhost:3030/jsonstore/bus/businfo/:${data.busId} `;
  data.button.addEventListener("click", () => {
    data.http.open("GET", requestStr);
    data.http.send();
    data.http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(data.http.responseText);
      }
    };
  });
}
