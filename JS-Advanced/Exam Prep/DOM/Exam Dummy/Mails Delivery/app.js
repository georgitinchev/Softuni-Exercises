function solve() {
  const listOMails = document.getElementById("list");
  const trash = document.getElementsByClassName("delete-list")[0];
  const input = {
    recipient: document.getElementById("recipientName"),
    title: document.getElementById("title"),
    messageField: document.getElementById("message"),
  };
  const addToList = document
    .getElementById("add")
    .addEventListener("click", (e) => {
      e.preventDefault();
      if (
        input.recipient.value.length == 0 ||
        input.title.value.length == 0 ||
        input.messageField.value.length == 0
      ) {
        return;
      }
      const li = document.createElement("li");
      li.innerHTML = `<h4>Title: ${input.title.value}</h4>
    <h4>Recipient Name: ${input.recipient.value}</h4>
    <span>${input.messageField.value}</span>
    <div id="list-action">
    <button type="submit" id="send">Send</button>
    <button type="submit" id="delete">Delete</button>
    </div>`;
      listOMails.appendChild(li);
      input.recipient.value = "";
      input.title.value = "";
      input.messageField.value = "";
      const deleteBtn = li.lastChild.lastElementChild.addEventListener(
        "click",
        (e) => {
          e.preventDefault();
          const midLi = document.createElement("li");
          midLi.innerHTML = `<span>To: ${li.firstChild.nextElementSibling.textContent.replace(
            "Recipient Name: ",
            " ".trimStart()
          )}</span>
          <span>${li.firstChild.textContent}</span>`;
          trash.appendChild(midLi);
          li.remove();
        }
      );
      const sendBtn = li.lastChild.firstElementChild.addEventListener(
        "click",
        (e) => {
          e.preventDefault();
          const sentMails =
            document.getElementsByClassName("sent-mails")[0].lastElementChild;
          const liNew = document.createElement("li");
          const data = {
            title: li.firstElementChild.textContent,
            to: li.firstElementChild.nextElementSibling.textContent,
          };
          data.title = data.title.replace("Title: ", " ").trimStart();
          data.to = data.to.replace("Recipient Name: ", " ").trimStart();
          liNew.innerHTML = `<span>To: ${data.to}</span>
          <span>Title: ${data.title}</span>
          <div class="btn">
               <button type="submit" class="delete">Delete</button>
          </div>`;
          sentMails.appendChild(liNew);
          li.remove();
          const deleteBtn2 = liNew.lastChild.children[0].addEventListener(
            "click",
            (e) => {
              e.preventDefault();
              const nfo = {
                to: liNew.firstChild.textContent,
                title: liNew.firstChild.nextElementSibling.textContent,
              };
              liNew.remove();
              const liOld = document.createElement("li");
              liOld.innerHTML = `<span>${nfo.to}</span>
              <span>${nfo.title}</span>`;
              trash.appendChild(liOld);
            }
          );
        }
      );
    });
  const resetBtn = document
    .getElementById("reset")
    .addEventListener("click", (e) => {
      e.preventDefault();
      input.recipient.value = "";
      input.title.value = "";
      input.messageField.value = "";
    });
}
solve();
