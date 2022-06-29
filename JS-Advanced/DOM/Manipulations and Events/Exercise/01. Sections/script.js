function create(arr) {
  let content = document.getElementById("content");
  for(let string of arr) {
  let div = document.createElement("div");
  let p = document.createElement("p");
  p.innerHTML = `${string}`
  p.style.display = "none"
  div.appendChild(p)
  div.addEventListener('click', (e) => {
    e.preventDefault();
    p.style.display = "block"
  })
  content.appendChild(div)
  }
}
