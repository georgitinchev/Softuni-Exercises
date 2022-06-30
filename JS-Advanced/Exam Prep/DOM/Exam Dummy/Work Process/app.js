function solve() {
  const data = {
    firstName: document.getElementById("fname"),
    lastName: document.getElementById("lname"),
    email: document.getElementById("email"),
    birth: document.getElementById("birth"),
    position: document.getElementById("position"),
    salary: document.getElementById("salary"),
    hireWorker: document.getElementById("add-worker"),
    table: document.getElementById("tbody"),
    sum: document.getElementById("sum"),
  };
  data.hireWorker.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      data.firstName.value == "" ||
      data.lastName.value == "" ||
      data.email.value == "" ||
      data.birth.value == "" ||
      data.position.value == "" ||
      data.salary.value == ""
    ) {
      return;
    }
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${data.firstName.value}</td>
    <td>${data.lastName.value}</td>
    <td>${data.email.value}</td>
    <td>${data.birth.value}</td>
    <td>${data.position.value}</td>
    <td>${data.salary.value}</td>
    <td>
    <button class="fired">Fired</button>
    <button class="edit">Edit</button>
    </td>`;
    data.table.appendChild(tr);
    const salaryTemp = Number(data.sum.textContent) + Number(data.salary.value);
    data.firstName.value = "";
    data.lastName.value = "";
    data.email.value = "";
    data.birth.value = "";
    data.position.value = "";
    data.salary.value = "";
    data.sum.textContent = salaryTemp.toFixed(2);
    tr.lastElementChild.firstElementChild.addEventListener("click", (e) => {
      e.preventDefault();
    });
    tr.lastElementChild.lastElementChild.addEventListener("click", (e) => {
      e.preventDefault();
      const allTd = tr.children;
      for (let i = 0; i < allTd.length - 1; i++) {
        switch (i) {
          case i == 0:
            data.firstName.value = allTd[i].textContent;
            allTd[i].textContent = "";
            break;
          case i == 1:
            data.lastName.value = allTd[i].textContent;
            allTd[i].textContent = "";
            break;
          case i == 2:
            data.email.value = allTd[i].textContent;
            allTd[i].textContent = "";
            break;
          case i == 3:
            data.birth.value = allTd[i].textContent;
            allTd[i].textContent = "";
            break;
          case i == 4:
            data.position.value = allTd[i].textContent;
            allTd[i].textContent = "";
            break;
          case i == 5:
            data.salary.value = allTd[i].textCOntent;
            allTd[i].textContent = "";
            break;
        }
      }
      tr.remove();
    });
  });
}
solve();
