window.addEventListener("load", loadStudents);
url = `http://localhost:3030/jsonstore/collections/students`;
let form = document.getElementById("form");
form.addEventListener("submit", addEntry);

function addEntry(ev) {
  ev.preventDefault();

  let data = new FormData(form);

  if (
    !data.get("firstName") ||
    !data.get("lastName") ||
    !data.get("facultyNumber") ||
    !data.get("grade") ||
    typeof data.get("firstName") != "string" ||
    data.get("firstName").length <= 0 ||
    data.get("firstName") == "" ||
    typeof data.get("lastName") != "string" ||
    data.get("lastName").length <= 0 ||
    data.get("lastName") == "" ||
    isNaN(data.get("facultyNumber")) ||
    data.get("facultyNumber").length <= 0 ||
    (isNaN(data.get("grade")) && data.get("grade").length <= 0)
  ) {
    return;
  }
  document.querySelector("#results tbody").innerHTML = "";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      firstName: data.get("firstName").trim(),
      lastName: data.get("lastName").trim(),
      facultyNumber: data.get("facultyNumber").trim(),
      grade: data.get("grade").trim(),
    }),
  })
    .then((res) => {
      if (res.ok == false) {
        throw new Error("Cant create new record");
      }
      return res.json();
    })
    .catch((err) => alert(err.message));

  document.querySelectorAll("[type=text]").forEach((e) => (e.value = ""));
  loadStudents();
}

function loadStudents() {
  fetch(url)
    .then((res) => {
      if (res.status != 200) {
        throw new Error("Cant fetch data");
      }
      return res.json();
    })
    .then((data) => {
      Object.entries(data).forEach((e) => {
        document
          .querySelector("tbody")
          .appendChild(
            createElement(
              "tr",
              createElement("td", e[1].firstName),
              createElement("td", e[1].lastName),
              createElement("td", e[1].facultyNumber),
              createElement("td", e[1].grade)
            )
          );
      });
    })
    .catch((err) => alert(err.message));
}
function createElement(type, ...content) {
  let el = document.createElement(type);
  content.forEach((e) => {
    if (typeof e == "string" || typeof e == "number") {
      e = document.createTextNode(e);
    }
    el.appendChild(e);
  });
  return el;
}
