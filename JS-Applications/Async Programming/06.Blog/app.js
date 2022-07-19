function attachEvents() {
  const loadPostBtn = document.getElementById("btnLoadPosts");
  const viewPostBtn = document.getElementById("btnViewPost");
  const postsSelect = document.getElementById("posts");
  const postTitleh1 = document.getElementById("post-title");
  const postBody = document.getElementById("post-body");
  const postComments = document.getElementById("post-comments");
  loadPostBtn.addEventListener("click", (e) => {
    e.preventDefault();
    fetch(`http://localhost:3030/jsonstore/blog/posts`)
      .then((response) => response.json())
      .then((data) => {
        for (let element in data) {
          const currObj = data[element];
          let option = document.createElement("option");
          option.setAttribute("value", currObj.id);
          option.textContent = currObj.title;
          postsSelect.appendChild(option);
        }
      })
      .catch((e) => {
        console.log("Error");
      });
  });
  viewPostBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const id = postsSelect.options[postsSelect.selectedIndex].value;
    let postTitle;
    let postContent;
    fetch(`http://localhost:3030/jsonstore/blog/comments`)
      .then((response) => response.json())
      .then((data) => {
        postBody.textContent = "";
        postTitleh1.textContent = "";
        postComments.innerHTML = "";
        fetch(`http://localhost:3030/jsonstore/blog/posts/${id}`)
          .then((response) => response.json())
          .then((data) => {
            postTitle = data.title;
            postContent = data.body;
            postTitleh1.textContent = postTitle;
            postBody.textContent = postContent;
          })
          .catch((error) => console.log("Error post get"));
        for (let element in data) {
          let currObj = data[element];
          if (currObj.postId == id) {
            const li = document.createElement("li");
            li.textContent = currObj.text;
            postComments.appendChild(li);
          }
        }
      })
      .catch((e) => console.log("error"));
  });
}

attachEvents();
