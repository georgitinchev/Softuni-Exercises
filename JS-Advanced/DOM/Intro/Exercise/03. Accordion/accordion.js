function toggle() {
  let text = document.getElementsByClassName("button")[0];
  if (text.textContent == "Less") {
    text.textContent = "More";
  } else {
    text.textContent = "Less";
  }
  let extra = document.getElementById("extra");
  if (extra.style.display == "none") {
    extra.style.display = "block";
  } else {
    extra.style.display = "none";
  }
}
