import { User } from './basics';

class Employee extends User {
    constructor(public jobTitle: string, firstName: string, lastName: string) {
        super(firstName, lastName);
    }
    work() {
        console.log(this._firstName);
    }
}

const firstEmployee = new Employee('Teacher', 'Emilia', 'Clark');
firstEmployee.age = 20;
// console.log(firstEmployee.fullName);
firstEmployee.work();
