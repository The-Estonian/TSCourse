let hobbies: (string | number)[] = ['Sports', 'Cooking'];

hobbies.push(20);
hobbies.push('20');

let users: (string | number)[];

users = [1, 'max'];
users = ['Hello', 'World'];
users = [5, 4];

let students: Array<string | number>;

let possibleResults: [number, number]; // [1, -1]

possibleResults = [1, -1];
// possibleResults = [5, 10, 12];

let user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
} = {
  name: 'max',
  age: 38,
  hobbies: ['Sports', 'Cooking'],
  role: {
    description: 'admin',
    id: 5,
  },
};

let val: {} = 'some text';

let data: Record<string, number | string>;

data = {
  entry1: 1,
  entry2: 'some string',
};
