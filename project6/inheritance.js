"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const basics_1 = require("./basics");
class Employee extends basics_1.User {
    jobTitle;
    constructor(jobTitle, firstName, lastName) {
        super(firstName, lastName);
        this.jobTitle = jobTitle;
    }
    work() {
        console.log(this._firstName);
    }
}
const firstEmployee = new Employee('Teacher', 'Emilia', 'Clark');
firstEmployee.age = 20;
console.log(firstEmployee.fullName);
firstEmployee.work();
