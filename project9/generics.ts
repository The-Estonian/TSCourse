const names1: Array<string> = ['max', 'anna'];
const names2: string[] = ['max', 'anna'];

type DataStore<T> = {
    [prop: string]: T;
};

const store: DataStore<boolean | string> = {};
store.name = 'Max';
store.isInstructor = true;

const nameStore: DataStore<string> = {
    data: 'hello',
};

function merge<T, U>(a: T, b: U) {
    return [a, b];
}

const ids = merge(1, 2);

const data = merge(1, 'Max');

function mergeObj<T extends object, U extends object>(a: T, b: U) {
    return { ...a, ...b };
}

const merged = mergeObj({ 1: 2 }, { 3: 4 });
console.log(merged);


class User<T> {
    constructor(public id: T){}
}

const user = new User('i1');
console.log(user.id);

interface Role<T> {
    name: T
}

class Person implements Role<string>{
    constructor(public age: number, public name: string){}
}

const pers = new Person(22, 'hola');
console.log(pers);
