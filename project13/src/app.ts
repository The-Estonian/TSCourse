function Logger(logString: string) {
    return function (constructor: Function) {
        // console.log(logString);
        // console.log(constructor);
    };
}

function WithTemplate(template: string, hookId: string) {
    return function <T extends { new (...args: any[]): { name: string } }>(
        originalConstructor: T
    ) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    const name = document.createElement('h1');
                    name.innerHTML = this.name;
                    hookEl.appendChild(name);
                }
            }
        };
    };
}

@Logger('LOGGING - PERSON')
@WithTemplate(
    `<div>
      <span>Menu1</span>
      <span>Menu2</span>
      <span>Menu3</span>
    </div > `,
    'app'
)
class Person {
    name = 'Mad';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();

// console.log(pers);

// Property dec // title: string
function Log(target: any, propertyName: string | Symbol) {
    // console.log('Propery Decorator');
    // console.log(target, propertyName);
}

// Accessor dec // setters getters
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    // console.log('Accessor Decorator');
    // console.log(target);
    // console.log(name);
    // console.log(descriptor);
}

// Method dec
function Log3(
    target: any,
    name: string | Symbol,
    descriptor: PropertyDescriptor
) {
    // console.log('Method Decorator');
    // console.log(target);
    // console.log(name);
    // console.log(descriptor);
}

// Parameter dec
function Log4(target: any, name: string | Symbol, position: number) {
    // console.log('Parameter Decorator');
    // console.log(target);
    // console.log(name);
    // console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Price should be above 0!');
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

// const p1 = new Product('Book', 19);
// const p2 = new Product('Book 2', 29);

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}

class Printer {
    message = 'This works!';

    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();

const button = document.querySelector('button');
button?.addEventListener('click', p.showMessage);

// ----------------------------------------------------------------

interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[];
    };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['required'],
    };
}
function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['positive'],
    };
}
function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form');
courseForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);

    if (validate(createdCourse)) {
        alert('Invalid input, please try again!');
        return;
    }
    console.log(createdCourse);
});
