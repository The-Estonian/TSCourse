type StringArray = string[];
// type ElementType<T extends any[]> = T[number];

// type Example1 = ElementType<StringArray>;

type GetElementType<T> = T extends any[] ? T[number] : T;

let text = 1;

type Example1 = GetElementType<StringArray>;
type Example2 = GetElementType<typeof text>;

// -----------------------------------------------------------------

type FullNamePerson = { firstName: string; lastName: string };
type FullNameOrNothing<T> = T extends FullNamePerson ? string : never;

const fullNameEmptyObj = {};
const fullNameObj = {
    firstName: 'Robert',
    lastName: 'Mark',
};

function getFullName<T extends object>(person: T): FullNameOrNothing<T> {
    if (
        'firstName' in person &&
        'lastName' in person &&
        person.firstName &&
        person.lastName
    ) {
        return `${person.firstName} ${person.lastName}` as FullNameOrNothing<T>;
    }
    throw new Error('No first or last name found!');
}
// const getFullName1 = getFullName(fullNameEmptyObj);
const getFullName2 = getFullName(fullNameObj);
// console.log(getFullName1);
console.log(getFullName2);
