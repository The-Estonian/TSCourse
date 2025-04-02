console.log('Hello World');

let userName: string;
let userAge: number = 38;

userName = 'Max';
// userAge = '34';

const add = (a: number, b: number = 5) => {
  return a + b;
};

add(5, 5);
// add('5');
add(5);
// add(5, '5');
