function solve(data, criteria) {
  let parsed = JSON.parse(data);
  let searchFor = criteria.split("-");
  let [key, value] = searchFor;
  let counter = 0;
  for (let element of parsed) {
    if (element[key] == value) {
      console.log(
        `${counter}. ${element.first_name} ${element.last_name} - ${element.email}`
      );
      counter++;
    }
  }
}
solve(
  `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",    
    "gender": "Female"
    }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    },
    {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
    }]`,
  "gender-Female"
);
solve(
  `[{

  "id": "1",
  
  "first_name": "Kaylee",
  
  "last_name": "Johnson",
  
  "email": "k0@cnn.com",
  
  "gender": "Female"
  
  }, {"id": "2", "first_name": "Kizzee", "last_name": "Johnson", "email": "kjost1@forbes.com", "gender": "Female" }, { "id": "3", "first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com", "gender": "Male" }, { "id": "4", "first_name": "Evanne", "last_name": "Johnson", "email": "ev2@hostgator.com", "gender": "Male" }]`,
  "last_name-Johnson"
);
