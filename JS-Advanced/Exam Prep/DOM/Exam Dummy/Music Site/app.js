window.addEventListener("load", solve);

function solve() {
  const data = {
    hitsContainer: document.getElementsByClassName("all-hits-container")[0],
    savedContainer: document.getElementsByClassName("saved-container")[0],
    likes: document.getElementsByClassName("likes")[0].firstElementChild,
    addBtn: document.getElementById("add-btn"),
    genre: document.getElementById("genre"),
    name: document.getElementById("name"),
    author: document.getElementById("author"),
    date: document.getElementById("date"),
  };

  data.addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      data.genre.value == "" ||
      data.name.value == "" ||
      data.author.value == "" ||
      data.date.value == ""
    ) {
      return;
    }
    const divOne = document.createElement("div");
    divOne.className = "hits-info";
    divOne.innerHTML = `<img src="./static/img/img.png">
    <h2>Genre: ${data.genre.value}</h2>
    <h2>Name: ${data.name.value}</h2>
    <h2>Author: ${data.author.value}</h2>
    <h3>Date: ${data.date.value}</h3>
    <button class="save-btn">Save song</button>
    <button class="like-btn">Like song</button>
    <button class="delete-btn">Delete</button>`;
    data.hitsContainer.appendChild(divOne);
    const authorTemp = data.author.value;
    data.genre.value = "";
    data.name.value = "";
    data.author.value = "";
    data.date.value = "";
    const deleteBtn = divOne.lastElementChild;
    const likeBtn = deleteBtn.previousElementSibling;
    const saveBtn = likeBtn.previousElementSibling;
    saveBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const divTwo = document.createElement("div");
      const values = divOne.querySelectorAll("h2,h3");
      // 1. genre 2. name 3. author 4. date
      divTwo.className = "hits-info";
      divTwo.innerHTML = `<img src="./static/img/img.png">
      <h2>${values[0].textContent}</h2>
      <h2>${values[1].textContent}</h2>
      <h2>Author: ${authorTemp}</h2>
      <h3>${values[3].textContent}</h3>
      <button class="delete-btn">Delete</button>`;
      data.savedContainer.appendChild(divTwo);
      divTwo.lastElementChild.addEventListener("click", (e) => {
        e.preventDefault();
        e.target.parentElement.remove();
      });
      divOne.remove();
    });
    likeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const regex = /\d/gi;
      let currentValue = Number(data.likes.textContent.match(regex)[0]);
      currentValue += 1;
      data.likes.textContent = `Total Likes: ${currentValue}`;
      e.target.disabled = true;
    });
    deleteBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.parentElement.remove();
    });
  });
}
