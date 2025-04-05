"use strict";
const names1 = ['max', 'anna'];
const names2 = ['max', 'anna'];
const store = {};
store.name = 'Max';
store.isInstructor = true;
const nameStore = {
    data: 'hello',
};
function merge(a, b) {
    return [a, b];
}
const ids = merge(1, 2);
const data = merge(1, 'Max');
function mergeObj(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = mergeObj({ 1: 2 }, { 3: 4 });
console.log(merged);
class User {
    constructor(id) {
        this.id = id;
    }
}
const user = new User('i1');
console.log(user.id);
class Person {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
}
const pers = new Person(22, 'hola');
console.log(pers);
