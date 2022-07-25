const html = {
  loadAllBtn: document.getElementById("loadBooks"),
  submitBtn: document.getElementsByTagName("form")[0].lastElementChild,
  title: document.getElementsByName("title")[0],
  author: document.getElementsByName("author")[0],
};

html.submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    html.title.value != "" &&
    html.author.value != "" &&
    document.getElementsByTagName("form")[0].firstElementChild.textContent ==
      "FORM"
  ) {
    fetch(`http://localhost:3030/jsonstore/collections/books/`, {
      method: "POST",
      body: JSON.stringify({
        author: html.author.value,
        title: html.title.value,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then(() => {
        html.title.value = "";
        html.author.value = "";
      })
      .catch((error) => console.log(error));
  }
});

function getAllBooks() {
  fetch(`http://localhost:3030/jsonstore/collections/books`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementsByTagName("tbody")[0].innerHTML = ``;
      for (let element in data) {
        const currObj = data[element];
        const id = element;
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${currObj.title}</td>
        <td>${currObj.author}</td>
        <td>
        <button>Edit</button>
        <button>Delete</button>
        </td>`;
        tr.lastElementChild.lastElementChild.addEventListener("click", () => {
          fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
            method: "DELETE",
          });
        });
        tr.lastElementChild.firstElementChild.addEventListener("click", (e) => {
          e.preventDefault();
          const titleInput = document.getElementsByName("title")[0];
          const authorInput = document.getElementsByName("author")[0];
          titleInput.value = currObj.title;
          authorInput.value = currObj.author;
          document.getElementsByTagName(
            "form"
          )[0].firstElementChild.textContent = "Edit FORM";
          document
            .getElementsByTagName("form")[0]
            .lastElementChild.addEventListener("click", (e) => {
              e.preventDefault();
              fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  title: titleInput.value,
                  author: authorInput.value,
                }),
              })
                .then((response) => response.json())
                .then(() => {
                  titleInput.value = "";
                  authorInput.value = "";
                  document.getElementsByTagName(
                    "form"
                  )[0].firstElementChild.textContent = "FORM";
                })
                .catch((error) => console.log(error));
            });
        });
        document.getElementsByTagName("tbody")[0].appendChild(tr);
      }
    })
    .catch((error) => console.log(error));
}
html.loadAllBtn.addEventListener("click", getAllBooks);
