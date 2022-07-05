window.addEventListener("load", solve);

function solve() {
  const data = {
    model: document.getElementById("model"),
    year: document.getElementById("year"),
    description: document.getElementById("description"),
    price: document.getElementById("price"),
    furnitures: document.getElementById("furniture-list"),
    addBtn: document.getElementById("add"),
    totalPrice: document.getElementsByClassName("total-price")[0],
  };
  data.addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      data.model.value == "" ||
      data.year.value == "" ||
      data.description.value == "" ||
      data.price.value == "" ||
      Number(data.price.value) <= 0 ||
      Number(data.year.value) <= 0
    ) {
      return;
    }
    data.price.value = Number(data.price.value).toFixed(2);
    const tr1 = document.createElement("tr");
    tr1.className = "info";
    const tr2 = document.createElement("tr");
    tr2.className = "hide";
    tr1.innerHTML = `<td>${data.model.value}</td>
    <td>${data.price.value}</td>
    <td>
    <button class="moreBtn">More Info</button>
    <button class="buyBtn">Buy it</button>
    </td>`;
    tr2.innerHTML = `<td>Year: ${data.year.value}</td>
    <td colspan="3">Description: ${data.description.value}</td>`;
    data.furnitures.appendChild(tr1);
    data.furnitures.appendChild(tr2);
    data.model.value = "";
    data.year.value = "";
    data.description.value = "";
    data.price.value = "";
    tr1.lastElementChild.firstElementChild.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.textContent == "More Info") {
        e.target.textContent = "Less Info";
        e.target.parentElement.parentElement.nextElementSibling.style.display =
          "contents";
      } else {
        e.target.textContent = "More Info";
        e.target.parentElement.parentElement.nextElementSibling.style.display =
          "none";
      }
    });
    tr1.lastElementChild.lastElementChild.addEventListener("click", (e) => {
      e.preventDefault();
      const sum =
        Number(tr1.firstElementChild.nextElementSibling.textContent) +
        Number(data.totalPrice.textContent);
      data.totalPrice.textContent = sum.toFixed(2);
      tr1.remove();
      tr2.remove();
    });
  });
}
