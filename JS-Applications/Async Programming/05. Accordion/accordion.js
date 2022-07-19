function solution() {
  const main = document.getElementById("main");
  fetch(`http://localhost:3030/jsonstore/advanced/articles/list`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((e) => {
        const id = e._id;
        let article = document.createElement("div");
        article.setAttribute("class", "accordion");
        article.innerHTML = `
             <div class="head">
                   <span>${e.title}</span>
                   <button class="button" id="${e._id}">More</button>
             </div>
             <div class="extra">
                   <p></p>
             </div>`;
        main.appendChild(article);
        const btn = article.firstElementChild.lastElementChild;
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          fetch(
            `http://localhost:3030/jsonstore/advanced/articles/details/${id}`
          )
            .then((response) => response.json())
            .then((data) => {
              if (btn.textContent == "More") {
                btn.textContent = "Less";
                article.lastElementChild.style.display = "inline-block";
                article.lastElementChild.firstElementChild.textContent =
                  data.content;
              } else {
                btn.textContent = "More";
                article.lastElementChild.style.display = "none";
              }
            })
            .catch("Error");
        });
      });
    })
    .catch((error) => {
      console.log("error");
    });
}
