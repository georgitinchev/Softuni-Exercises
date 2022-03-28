function solve(input) {
    let totalIn = 0;
    for (let line of input) {
      let regex =
        /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.]*?(?<price>[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)\$/gm;
      let result = regex.exec(line);
      if (result) {
        let totalPrice =
          Number(result.groups.quantity) * Number(result.groups.price);
        console.log(
          `${result.groups.customer}: ${
            result.groups.product
          } - ${totalPrice.toFixed(2)}`
        );
        totalIn += totalPrice;
      } else if (line === "end of shift") {
        console.log(`Total income: ${totalIn.toFixed(2)}`);
      }
    }
  }