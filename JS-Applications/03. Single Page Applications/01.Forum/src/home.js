import { showDetails } from "./details.js";

const html = {
  titleInput: document.getElementById("topicName"),
  usernameInput: document.getElementById("username"),
  postInput: document.getElementById("postText"),
  container: document.getElementsByClassName("topic-container")[0],
};

export async function postTopic(e) {
  if (e != null && e != undefined) {
    e.preventDefault();
  }
  if (
    html.titleInput.value == "" ||
    html.usernameInput.value == "" ||
    html.postInput.value == ""
  ) {
    return;
  }
  fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: html.titleInput.value,
      username: html.usernameInput.value,
      content: html.postInput.value,
      date: new Date(),
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      html.titleInput.value = "";
      html.usernameInput.value = "";
      html.postInput.value = "";
      fetchPosts();
    })
    .catch((error) => console.log(error));
}
export async function fetchPosts(e) {
  if ((e != null) & (e != undefined)) {
    e.preventDefault();
  }
  html.container.innerHTML = "";
  fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`)
    .then((response) => response.json())
    .then((data) => {
      for (let element in data) {
        const currObj = data[element];
        const div = document.createElement("div");
        div.setAttribute("class", "topic-name-wrapper");
        div.innerHTML = `<div class="topic-name">
        <a href="#" class="normal" id="${currObj._id}">
            <h2>${currObj.title}</h2>
        </a>
        <div class="columns">
            <div>
                <p>Date: <time>${currObj.date}</time></p>
                <div class="nick-name">
                    <p>Username: <span>${currObj.username}</span></p>
                </div>
            </div>
        </div>
    </div>`;
        html.container.appendChild(div);
      }
      addListeners();
    })
    .catch((error) => console.log(error));
}
export function cancelPost(e) {
  if (e != null && e != undefined) {
    e.preventDefault();
  }
  html.titleInput.value = "";
  html.usernameInput.value = "";
  html.postInput.value = "";
}
function addListeners() {
  for (let i = 0; i < html.container.children.length; i++) {
    const currElement = html.container.children[i];
    const a = currElement.firstElementChild.firstElementChild;
    a.addEventListener("click", (e) => {
      if (e != null && e != undefined) {
        e.preventDefault();
      }
      showDetails(a.id);
    });
  }
}
