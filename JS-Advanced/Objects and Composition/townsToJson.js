function solve(input) {
  let arr = [];
  for (let line of input) {
    line = line.split(" | ");
    line[0] = line[0].replace("| ", "");
    line[2] = line[2].replace(" |", "");
    line[1] = Number(line[1]).toFixed(2);
    line[2] = Number(line[2]).toFixed(2);
    let [town, lat, lon] = line;
    if (lat == "NaN" || lon == "NaN") {
      continue;
    } else {
      lat = Number(lat);
      lon = Number(lon);
      if (lat % 10 == 0) {
        lat = lat.toFixed(1);
      }
      if (lon % 10 == 0) {
        lon = lon.toFixed(1);
      }
      let obj = {
        Town: town,
        Latitude: lat,
        Longitude: lon,
      };
      arr.push(obj);
    }
  }
  console.log(JSON.stringify(arr));
}
solve([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
