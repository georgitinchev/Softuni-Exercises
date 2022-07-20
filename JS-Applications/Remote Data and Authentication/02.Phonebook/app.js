function attachEvents() {
  const html = {
    loadBtn: document.getElementById("btnLoad"),
    createBtn: document.getElementById("btnCreate"),
    personInput: document.getElementById("person"),
    phoneInput: document.getElementById("phone"),
    phoneBook: document.getElementById("phonebook"),
  };
  html.loadBtn.addEventListener("click", (e) => {
    e.preventDefault();
    fetch(`http://localhost:3030/jsonstore/phonebook`)
      .then((response) => response.json())
      .then((data) => {
        html.phoneBook.innerHTML = "";
        for (let element in data) {
          const currObj = data[element];
          const key = currObj._id;
          let li = document.createElement("li");
          li.innerHTML = `${currObj.person}: ${currObj.phone}<button>Delete</button>`;
          li.lastElementChild.addEventListener("click", (e) => {
            e.preventDefault();
            fetch(`http://localhost:3030/jsonstore/phonebook/${key}`, {
              method: "DELETE",
            }).catch((error) => console.log(error));
            li.remove();
          });
          html.phoneBook.appendChild(li);
        }
      })
      .catch((error) => console.log(error));
  });
  html.createBtn.addEventListener("click", (e) => {
    if (html.personInput.value == "" || html.phoneInput.value == "") {
      return;
    }
    e.preventDefault();
    fetch(`http://localhost:3030/jsonstore/phonebook`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        person: html.personInput.value,
        phone: html.phoneInput.value,
      }),
    });
  });
}

attachEvents();
