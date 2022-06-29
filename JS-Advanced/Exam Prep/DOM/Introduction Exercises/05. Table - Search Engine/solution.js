function solve() {
   const data = {
      collection: document.getElementsByTagName("tr"), // array of tr
      getValue: () => document.getElementById("searchField").value, // value of searchField 
   }

   function onClick({collection,value}) { 
      collection.map(x => (x.className = "")); // give every tr a blank class
      collection.map(x => {
         if (x.innerHTML.includes(value)) x.className = "select"
         return x 
      }) //if innerHtml of tr includes value , add class select
   }

   document.getElementById("searchBtn").addEventListener("click", () => {
      onClick({
         collection: Array.from(data.collection),
         value: data.getValue(),
      })
   })
}