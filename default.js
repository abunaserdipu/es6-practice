function minus(num1, num2 = 0){
    // num2 = num2 || 0;
    return num1 - num2;
}
const total = minus(2021 - 1996);
console.log(total);

function createUser(name, age = 18){
    const user = {};
    user.name = name;
    user.age = age;
    return user;
}
const outPut = createUser("Naser", 25);
console.log(outPut);