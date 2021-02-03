class Parent {
  constructor() {
    this.fatherName = "Kayes";
  }
}
class Child extends Parent {
  constructor(name) {
    super();
    this.name = name;
  }
  getFullName() {
    return this.name + " " + this.fatherName;
  }
}
const baby = new Child("Fatima");
const baby2 = new Child("Raisha");
console.log(baby.getFullName());
