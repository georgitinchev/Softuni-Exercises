function solve() {
  const html = {
    arrive: document.getElementById("arrive"),
    depart: document.getElementById("depart"),
    info: document.getElementsByClassName("info")[0],
  };
  let ID = "depot";
  let stopName;
  async function depart() {
    await fetch(`http://localhost:3030/jsonstore/bus/schedule/${ID}`)
      .then((response) => response.json())
      .then((data) => {
        stopName = data.name;
        ID = data.next;
        html.info.textContent = `Next stop ${stopName}`;
        html.depart.disabled = true;
        html.arrive.disabled = false;
      })
      .catch((error) => {
        html.info.textContent = "Error";
        html.arrive.disabled = true;
        html.depart.disabled = true;
      });
  }

  function arrive() {
    html.info.textContent = `Arriving at ${stopName}`;
    html.arrive.disabled = true;
    html.depart.disabled = false;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
