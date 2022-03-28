function furniture(arr) {
    let pattern = /(?<item>[A-Za-z\s]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/g;
    let newArr = [];
    for (let el of arr) {
      if (el == "Purchase") {
        break;
      } else {
        newArr.push(el);
      }
    }
    let string = newArr.join(" ");
    let test;
    let obj = {
      furnitureArr: [],
      priceArr: [],
      quantityArr: [],
    };
    let sum = 0;
    while ((test = pattern.exec(string)) != null) {
      let item = test.groups["item"];
      let price = test.groups["price"];
      let quantity = test.groups["quantity"];
      obj["furnitureArr"].push(item);
      obj["priceArr"].push(price);
      obj["quantityArr"].push(quantity);
    }
    for (let i = 0; i < obj["priceArr"].length; i++) {
      sum += obj["priceArr"][i] * obj["quantityArr"][i];
    }
    if (obj["furnitureArr"].length > 0) {
      console.log(
        `Bought furniture:\n${obj["furnitureArr"].join(
          "\n"
        )}\nTotal money spend: ${sum.toFixed(2)}`
      );
    } else {
      console.log(`Bought furniture:\nTotal money spend: ${sum.toFixed(2)}`);
    }
  }