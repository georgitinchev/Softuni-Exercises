const html = {
  topicName: document.getElementById("topicName"),
  username: document.getElementById("username"),
  postText: document.getElementById("postText"),
  postBtn: document.getElementsByClassName("public")[0],
  cancelBtn: document.getElementsByClassName("cancel")[0],
};

html.cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  html.topicName.value = "";
  html.username.value = "";
  html.postText.value = "";
});
html.postBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    html.topicName.value == "" ||
    html.username.value == "" ||
    html.postText.value == ""
  ) {
    return;
  }
  fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: html.topicName.value,
      username: html.username.value,
      post: html.postText.value,
    }),
  })
    .then((response) => response.json())
    .then(() => {
      fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`)
        .then((response) => response.json())
        .then((data) => {
          document.getElementsByClassName("topic-title")[0].innerHTML = "";
          for (let element in data) {
            const currObj = data[element];
            const today = new Date();
            document.getElementsByClassName("topic-title")[0].innerHTML += `
            <div class="topic-container">
                <div class="topic-name-wrapper">
                    <div class="topic-name">
                        <a href="#" class="normal">
                            <h2>${currObj.title}</h2>
                        </a>
                        <div class="columns">
                            <div>
                                <p>Date: <time>${
                                  today.getFullYear() +
                                  "-" +
                                  (today.getMonth() + 1) +
                                  "-" +
                                  today.getDate() +
                                  " " +
                                  today.getHours() +
                                  ":" +
                                  today.getMinutes() +
                                  ":" +
                                  today.getSeconds()
                                }</time></p>
                                <div class="nick-name">
                                    <p>Username: <span>${
                                      currObj.username
                                    }</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
          }
        });
      html.topicName.value = "";
      html.username.value = "";
      html.postText.value = "";
    })
    .catch((error) => console.log(error));
});
