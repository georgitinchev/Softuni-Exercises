function movies(arr) {
  let listOfMovies = [];
  for (let lines of arr) {
    if (lines.includes("addMovie")) {
      let nameOfMovie = lines.split("addMovie ")[1];
      listOfMovies.push({ name: nameOfMovie });
    } else if (lines.includes("directedBy")) {
      let info = lines.split("directedBy ");
      let name = info[0].trim();
      let director = info[1];
      let movie = listOfMovies.find((movieObj) => movieObj.name === name);
      if (movie) {
        movie.director = director;
      }
    } else if (lines.includes("onDate")) {
      let info = lines.split("onDate ");
      let name = info[0].trim();
      let date = info[1];
      let movie = listOfMovies.find((movieObj) => movieObj.name === name);
      if (movie) {
        movie.date = date;
      }
    }
  }
  for (let movie of listOfMovies) {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  }
}
