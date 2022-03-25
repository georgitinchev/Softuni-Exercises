function employee(arr) {
  let personalArr = [];
  for (let i = 0; i < arr.length; i++) {
    personalArr.push(arr[i].length);
  }

  class Employee {
    constructor(name, num) {
      this.name = name;
      this.num = num;
    }
    print() {
      console.log(`Name: ${this.name} -- Personal Number: ${this.num}`);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let obj = new Employee(arr[i], personalArr[i]);
    obj.print();
  }
}
