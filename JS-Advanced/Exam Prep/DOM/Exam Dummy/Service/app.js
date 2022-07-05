window.addEventListener("load", solve);

function solve() {
  const data = {
    section: document.getElementById("received-orders"),
    completed: document.getElementById("completed-orders"),
    sendBtn: document.getElementById("client-phone").nextElementSibling,
    description: document.getElementById("description"),
    clientName: document.getElementById("client-name"),
    clientPhone: document.getElementById("client-phone"),
    productType: document.getElementById("type-product"),
    clearBtn: document.getElementsByClassName("clear-btn")[0],
  };
  data.clearBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const nextDivs = Array.from(
      e.target.parentElement.getElementsByClassName("container")
    );
    for (let element of nextDivs) {
      element.remove();
    }
  });
  data.sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      data.description.value == "" ||
      data.clientName.value == "" ||
      data.clientPhone.value == ""
    ) {
      return;
    }
    const div = document.createElement("div");
    const productValue =
      data.productType.options[data.productType.selectedIndex].value;
    div.className = "container";
    div.innerHTML = `<h2>Product type for repair: ${productValue}</h2>
    <h3>Client information: ${data.clientName.value}, ${data.clientPhone.value}</h3>
    <h4>Description of the problem: ${data.description.value}</h4>
    <button class="start-btn">Start repair</button>
    <button class="finish-btn" disabled>Finish repair</button>`;
    data.section.appendChild(div);
    data.clientName.value = "";
    data.description.value = "";
    data.clientPhone.value = "";
    data.productType.selectedIndex = 0;
    div.lastElementChild.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.disabled == false) {
        const divNew = document.createElement("div");
        const productType = e.target.parentElement.firstElementChild;
        const clientNfo = productType.nextElementSibling;
        const description = clientNfo.nextElementSibling;
        divNew.className = "container";
        divNew.innerHTML = `<h2>${productType.textContent}</h2>
        <h3>${clientNfo.textContent}</h3>
        <h4>${description.textContent}</h4>`;
        data.completed.appendChild(divNew);
        e.target.parentElement.remove();
      }
    });
    div.lastElementChild.previousElementSibling.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        e.target.disabled = true;
        e.target.nextElementSibling.disabled = false;
      }
    );
  });
}
