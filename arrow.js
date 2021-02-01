//function declaration
// function doubleIt(num){
//     return num * 2;
// }
// const result = doubleIt(5);
// console.log(result);

//function expression 
// const doubleIt = function(num){
//     return num * 2;
// }
// const result = doubleIt(5);
// console.log(result);

//arrow function
const doubleIt = num => num * 2;
const result = doubleIt(33);
console.log(result);

const tripleIt = num => num * 3;
const add = (num1, num2) => {
    const sum = num1 + num2;
    const difference = num1 - num2;
    const result = sum / difference;
    return result;
}
const give35 = () => 35;
const result3 = give35();
console.log(result3);
const result2= add(2021, 1996);
console.log(result2);