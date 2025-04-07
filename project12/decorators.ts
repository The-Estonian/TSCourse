function logger<T extends new (...args: any[]) => any>(
    target: T,
    ctx: ClassDecoratorContext
) {
    // console.log(target);
    // console.log(ctx);

    return class extends target {
        constructor(...args: any[]) {
            super(...args);
            // console.log('class constructor');
            // console.log(this);
        }
    };
}

function autobind(
    target: (...args: any[]) => any,
    ctx: ClassMethodDecoratorContext
) {
    ctx.addInitializer(function (this: any) {
        this[ctx.name] = this[ctx.name].bind(this);
    });

    return function (this: any) {
        console.log('Executing original function');
        target.apply(this);
    };
}
function replacer<T>(initValue: T) {
    return function replacerDecorator(
        target: undefined,
        ctx: ClassFieldDecoratorContext
    ) {
        return (initialValue: any) => {
            console.log(initialValue);

            return initValue;
        };
    };
}

@logger
class Person {
    @replacer('Boba')
    name = 'max';

    // constructor() {
    //     this.greet = this.greet.bind(this);
    // }

    @autobind
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

const newPerson = new Person();
const greet = newPerson.greet;
greet();
