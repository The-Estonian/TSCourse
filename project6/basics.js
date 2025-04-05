"use strict";
// const anFunction = (e:string) => {
//     console.log(e);
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// };
// anFunction('Hello');
// class User {
//     name: string;
//     age: number;
//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }
// }
class User {
    _firstName;
    _lastName;
    _age = 0;
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    set age(n) {
        this._age = n;
    }
    get fullName() {
        return this._firstName + ' ' + this._lastName + ' ' + (this._age ? this._age : '');
    }
    static eid = 'USER';
}
exports.User = User;
// const max = new User('Max', 'Paine');
// max.age = 10;
// const fred = new User('Fred', 'Jüssi');
// console.log(max.fullName);
// console.log(fred.fullName);
