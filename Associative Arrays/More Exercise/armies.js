function armies(arr) {
  let obj = {};

  function totalCount(armies) {
    let totalCount = 0;
    for (let i = 0; i < armies.length; i++) {
      totalCount = totalCount += armies[i][1];
    }
    return totalCount;
  }

  for (let el of arr) {
    if (el.includes("arrives")) {
      let leader = el.split(" arrives")[0];
      obj[leader] = [];
    } else if (el.includes(":")) {
      let [leader, army] = el.split(": ");
      let [armyName, armyCount] = army.split(", ");
      if (obj.hasOwnProperty(leader)) {
        obj[leader].push([armyName, Number(armyCount)]);
      }
    } else if (el.includes("+")) {
      let [armyName, armyCount] = el.split(" + ");
      let entries1 = Object.entries(obj);
      for (let i = 0; i < entries1.length; i++) {
        let armyArray = entries1[i][1];
        for (let j = 0; j < armyArray.length; j++) {
          if (armyArray[j].includes(armyName)) {
            armyArray[j][1] = armyArray[j][1] += Number(armyCount);
          }
        }
      }
      obj = Object.fromEntries(entries1);
    } else if (el.includes(" defeated")) {
      let leader = el.split(" defeated")[0];
      delete obj[leader];
    }
  }

  let entries = Object.entries(obj);
  entries.sort((a, b) => {
    a = totalCount(a[1]);
    b = totalCount(b[1]);
    return b - a;
  });
  for (let arr of entries) {
    arr[1].sort((a, b) => {
      a = a[1];
      b = b[1];
      return b - a;
    });
  }
  for (let el of entries) {
    console.log(`${el[0]}: ${totalCount(el[1])}`);
    let armiesArr = el[1];
    for (let i = 0; i < armiesArr.length; i++) {
      console.log(`>>> ${armiesArr[i][0]} - ${armiesArr[i][1]}`);
    }
  }
}
