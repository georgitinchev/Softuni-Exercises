function solve() {
<<<<<<< HEAD
  // 1. Get all elements
  // 2. depart func -> fetch data for next stop, start from "depot"
  // 3. update infoElement with text from server data
  // 4. arrive button disabled = false
  // 5. arrive func -> update buttons
  const html = {
    info: document.getElementById(`info`),
    depart: document.getElementById(`depart`),
    arrive: document.getElementById(`arrive`),
  };

  const getStop = async (name) => {
    try {
      const stop = await fetch(
        `http://localhost:3030/jsonstore/bus/schedule/${name}`
      );
      return await stop.json();
    } catch (e) {
      html.info.innerHTML = "Error";
      html.arrive.disabled = true;
      html.depart.disabled = true;
    }
  };
  let nextStop;
  let nextStopName = "depot";

  async function depart() {
    html.depart.disabled = true;
    html.arrive.disabled = false;
    nextStop = await getStop(nextStopName);
    html.info.innerHTML = `Next stop ${nextStop.name}`;
  }

  function arrive() {
    html.depart.disabled = false;
    html.arrive.disabled = true;
    html.info.innerHTML = `Arriving at ${nextStop.name}`;
    nextStopName = nextStop.next;
  }

=======
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

>>>>>>> 13ad2b86e054f934119b675c51953bbb8bb7d74f
  return {
    depart,
    arrive,
  };
}

let result = solve();
