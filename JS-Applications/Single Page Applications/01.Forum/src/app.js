import { postTopic, fetchPosts, cancelPost } from "./home.js";

window.onload = fetchPosts;
document
  .getElementsByClassName("public")[0]
  .addEventListener("click", postTopic);
document
  .getElementsByClassName("cancel")[0]
  .addEventListener("click", cancelPost);
