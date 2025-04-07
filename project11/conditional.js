"use strict";
let text = 1;
const fullNameEmptyObj = {};
const fullNameObj = {
    firstName: 'Robert',
    lastName: 'Mark',
};
function getFullName(person) {
    if ('firstName' in person &&
        'lastName' in person &&
        person.firstName &&
        person.lastName) {
        return `${person.firstName} ${person.lastName}`;
    }
    throw new Error('No first or last name found!');
}
// const getFullName1 = getFullName(fullNameEmptyObj);
const getFullName2 = getFullName(fullNameObj);
// console.log(getFullName1);
console.log(getFullName2);
