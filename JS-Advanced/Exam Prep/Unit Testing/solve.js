const { bookSelection } = require("./bookSelection");
const chai = require("chai").expect;

describe("Tests …", function () {
  let num = 6;
  let str = "asdfasdfasdf";
  it("check that num is numeric", function () {
    expect.isNumber(num).to.equal(true);
  });
  it("check that str is a string", function () {
    expect.isString(str).to.equal(true);
  });
});
