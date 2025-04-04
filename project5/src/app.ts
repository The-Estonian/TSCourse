// Code goes here!

// let age = 30;
// const userName = 'Max';
// age = 29;

const person = {
    firstName: 'max',
    age: 30,
};

// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);

// const button = document.querySelector('button');

// if (button) {
//   button.addEventListener('click', (event) => console.log(event));
// }

// const add = (a: number = 1, b: number = 1) => a + b;

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const [hobby1, hobby2] = hobbies;

console.log(hobby1, hobby2);

const add = (...numbers: number[]) => {
    return numbers.reduce((cur, val) => {
        return cur + val;
    }, 0);
};
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const { firstName: userName, age } = person;

console.log(userName, age);
