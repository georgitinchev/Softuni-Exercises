function attachEvents() {
  const html = {
    url1: `http://localhost:3030/jsonstore/messenger`,
    submitBtn: document.getElementById("submit"),
    refreshBtn: document.getElementById("refresh"),
    authorInput:
      document.getElementById("controls").firstElementChild.nextElementSibling,
    messageInput:
      document.getElementById("controls").lastElementChild
        .previousElementSibling.previousElementSibling,
    textArea: document.getElementById("messages"),
  };
  html.submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    fetch(html.url1, {
      method: "POST",
      body: JSON.stringify({
        author: new String(html.authorInput.value),
        content: new String(html.messageInput.value),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => {
        (html.authorInput.value = ""), (html.messageInput.value = "");
      })
      .catch((error) => console.log("Error!"));
  });
  html.refreshBtn.addEventListener("click", (e) => {
    e.preventDefault();
    fetch(`http://localhost:3030/jsonstore/messenger`)
      .then((response) => response.json())
      .then((data) => {
        html.textArea.innerHTML = "";
        for (let element in data) {
          const currObj = data[element];
          const lastElObj = Object.values(data);
          if (
            currObj.author == lastElObj[lastElObj.length - 1].author &&
            currObj.content == lastElObj[lastElObj.length - 1].content
          ) {
            html.textArea.textContent += `${currObj.author}: ${currObj.content}`;
          } else {
            html.textArea.textContent += `${currObj.author}: ${currObj.content}\n`;
          }
        }
      })
      .catch((error) => console.log("Error"));
  });
}

attachEvents();
