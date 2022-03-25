function browser(obj, arr) {
  let ram = obj;
  for (let line of arr) {
    if (line == "Clear History and Cache") {
      ram["Open Tabs"] = [];
      ram["Recently Closed"] = [];
      ram["Browser Logs"] = [];
      continue;
    }
    let command = line.split(" ")[0];
    let target = line.split(" ")[1];
    if (command == "Open") {
      ram["Open Tabs"].push(target);
      ram["Browser Logs"].push(line);
    } else if (command == "Close" && ram["Open Tabs"].indexOf(target) != -1) {
      let index = ram["Open Tabs"].indexOf(target);
      let removed = ram["Open Tabs"].splice(index, 1);
      ram["Recently Closed"].push(removed);
      ram["Browser Logs"].push(line);
    }
  }
  console.log(
    `${ram["Browser Name"]}\nOpen Tabs: ${ram["Open Tabs"].join(
      ", "
    )}\nRecently Closed: ${ram["Recently Closed"].join(
      ", "
    )}\nBrowser Logs: ${ram["Browser Logs"].join(", ")}`
  );
}
