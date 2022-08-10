export async function showComments(ide) {
  fetch(`http://localhost:3030/jsonstore/collections/myboard/comments`)
    .then((response) => response.json())
    .then((data) => {
      for (let element in data) {
        const currObj = data[element];
        if (currObj.id == ide) {
          appendComments(currObj);
        }
      }
    })
    .catch(() => console.log("Element ID not present in comments"));
}

export async function showDetails(id) {
  fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/${id}`)
    .then((response) => response.json())
    .then((data) => {
      createElement(data);
      showComments(id);
    })
    .catch((error) => console.log(error));
}

function appendComments(obj) {
  if (obj.username == "" || obj.text == "") {
    return;
  }
  const container = document.getElementsByClassName("theme-content")[0];
  const div = document.createElement("div");
  div.setAttribute("class", "userComment");
  div.innerHTML = `<div class="topic-name-wrapper">
  <div class="topic-name">
    <p>
      <strong>${obj.username}</strong> commented on
      <time>${obj.date}</time>
    </p>
    <div class="post-content">
      <p>
        ${obj.text}
      </p>
    </div>
  </div>
</div>`;
  container.querySelector("div.comment").appendChild(div);
}

function createElement(obj) {
  const div = document.createElement("div");
  div.setAttribute("class", "container");
  const container = document.getElementsByClassName("container")[0];
  div.innerHTML = `<!-- theme content  -->
  <div class="theme-content">
    <!-- theme-title  -->
    <div class="theme-title">
      <div class="theme-name-wrapper">
        <div class="theme-name">
          <h2>${obj.title}</h2>
        </div>
      </div>
    </div>
    <!-- comment  -->

    <div class="comment">
  <div class="header">
    <img src="./static/profile.png" alt="avatar" />
    <p><span>${obj.username}</span> posted on <time>2020-10-10 12:08:28</time></p>

    <p class="post-content">${obj.content}</p>
  </div>
</div>

    <div class="answer-comment">
      <p><span>currentUser</span> comment:</p>
      <div class="answer">
        <form>
          <textarea
            name="postText"
            id="comment"
            cols="30"
            rows="10"
          ></textarea>
          <div>
            <label for="username"
              >Username <span class="red">*</span></label
            >
            <input type="text" name="username" id="username" />
          </div>
          <button>Post</button>
        </form>
      </div>
    </div>
  </div>`;
  container.innerHTML = "";
  container.appendChild(div);
  div.getElementsByTagName("button")[0].addEventListener("click", (e) => {
    e.preventDefault();
    let post = div.getElementsByTagName("textarea")[0];
    let username = div.getElementsByTagName("input")[0];
    if (username.value == "" || post.value == "") {
      return;
    } else {
      fetch(`http://localhost:3030/jsonstore/collections/myboard/comments/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: post.value,
          username: username.value,
          date: new Date(),
          id: obj._id,
        }),
      })
        .then(() => {
          username.value = "";
          post.value = "";
          showComments(obj._id);
        })
        .catch((error) => console.log(error));
    }
  });
}
