const appUser = {
    name: 'Max',
    age: 35,
    permissions: [{ id: 'p1', title: 'Admin', description: 'Admin access' }],
};

console.log(appUser);

// type AppUser = typeof appUser;

type AppUser = {
    name: string;
    age: number;
    permissions: {
        id: string;
        title: string;
        description: string;
    }[];
};

type Perms = AppUser['permissions']; // extracts the structure of the object with key it's an array
type Perm = Perms[number]; // extracts the structure out of array

const stream: Perm = {
    id: 'p2',
    title: 'test',
    description: 'Just a test',
};
console.log(stream);

type Names = string[];
type Name = Names[number];

const data: Name = 'Max';
console.log(data);
