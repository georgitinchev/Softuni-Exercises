function search() {
   const html = {
       value: document.getElementById("searchText").value, // value of search bar 
       data: document.getElementById("towns").children, // array of all children elements
       result: document.getElementById("result"),
   }
   let count = 0
   Array.from(html.data).map(x => {
       if (x.innerHTML.includes(html.value)) {
           x = x.style.textDecoration = "bold underline"
           count += 1
       }
       return x
   })

   html.result.textContent = `${count} matches found` // the result's innerHtml is equal to the count in a string with matches found
}