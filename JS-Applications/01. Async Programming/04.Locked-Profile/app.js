function lockedProfile() {
  const main = document.getElementById("main");
  main.innerHTML = "";
  fetch(`http://localhost:3030/jsonstore/advanced/profiles`)
    .then((response) => response.json())
    .then((data) => {
      for (let element of Object.entries(data)) {
        const userInfo = element[1];
        const profileDiv = document.createElement("div");
        profileDiv.setAttribute("class", "profile");
        profileDiv.innerHTML = `<img src="./iconProfile2.png" class="userIcon" />
        <label>Lock</label>
        <input type="radio" name="user1Locked" value="lock" checked>
        <label>Unlock</label>
        <input type="radio" name="user1Locked" value="unlock"><br>
        <hr>
        <label>Username</label>
        <input type="text" name="user1Username" value="${userInfo.username}" disabled readonly />
        <div id="user1HiddenFields">
            <hr>
            <label>Email: </label>
            <input type="email" name="user1Email" value="${userInfo.email}" disabled readonly />
            <label>Age: </label>
            <input type="email" name="user1Age" value="${userInfo.age}" disabled readonly />
        </div>
        <button>Show more</button>`;
        main.appendChild(profileDiv);
      }
    })
    .catch((error) => console.log("Error"));
  const toggle = (btn, content) => {
    if (btn.innerHTML === "Show more") {
      btn.innerHTML = "Hide it";
      content.style.display = "block";
    } else {
      btn.innerHTML = "Show more";
      content.style.display = "none";
    }
  };

  document.getElementById("main").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const parent = e.target.parentNode;
      const isUnlocked =
        parent.querySelector("input[type=radio]:checked").value === "unlock";

      if (isUnlocked) {
        const infoDiv = parent.querySelector("div");
        toggle(e.target, infoDiv);
      }
    }
  });
}
