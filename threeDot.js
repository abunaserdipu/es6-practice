//spread operator
const ages = [15, 17, 19, 21];
const ages2 = [9, 7, 5];
const ages3 = [23, 25, 27];
const allAges = ages.concat(ages2).concat(3).concat(ages3);
const allAges2 = [...ages, ...ages2, 3, ...ages3];
console.log(allAges2);

const business = 650;
const minister = 350;
const secretary = 150;
const amount = [650, 350, 150, 750, 950];
// const maximum = Math.max(business, minister, secretary);
const maximum = Math.max(...amount);
console.log(maximum);

//quiz question
const numbers = [2, 5, 1, 7, 8, 33, 29];
const maximum2 = Math.max(...numbers);
console.log(maximum2);