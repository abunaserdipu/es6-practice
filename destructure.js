//Object destructure
const person = {name: "Abu Naser", age: 25, lifeStyle: "Islam", address: "Puraton Kachukhet", spouse: "unmarried", friends: ["Zayed", "Ikram", "Tipu"], phone: "01928282053"};

const {name, address, phone} = person;
// const lifeStyle = person.name;
// const address = person.address;
console.log(name, address, phone);
// console.log(lifeStyle, address);
// console.log(lifeStyle, address);
// console.log(lifeStyle, address);

//Array destructure
const IslamicBrothers = ["Shaimum", "Zayed", "Ikram", "Iffat", "Nahid",];
const [relative, ...dinivai] = IslamicBrothers;
console.log(relative, dinivai);