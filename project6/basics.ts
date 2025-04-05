// const anFunction = (e:string) => {
//     console.log(e);

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

export class User {
    private _age: number = 0;
    constructor(protected _firstName: string, private _lastName: string) {
    }

    set age(n: number) {
        this._age = n;
    }

    get fullName() {
        return this._firstName+' '+this._lastName+' '+ (this._age?this._age:'');
    }

    static eid = 'USER';
}

// const max = new User('Max', 'Paine');
// max.age = 10;
// const fred = new User('Fred', 'Jüssi');

// console.log(max.fullName);
// console.log(fred.fullName);
