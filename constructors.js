function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

// let myCar = new Car('bmw', '745li', 2010);
// console.log(myCar);

function test(a) {
  this.a = a;
  console.log("-------------Hello--------------");
}
let myTest = new test("bmw");
console.log(myTest.a);
