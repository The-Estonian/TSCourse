// enum Role {
//   Admin,
//   Editor,
//   Guest,
// }

type Role = 'admin' | 'editor' | 'guest';

type User = {
  name: string;
  age: number;
  role: Role;
  permssions: string[];
};

let userRole: Role;

const trigger = () => {
  userRole = 'admin';
};

let possibleResults: [1 | -1, 1]; // [1, -1]

possibleResults = [-1, 1];

const access = (role: Role) => {
  console.log(role);
};

// access("pony")
access("admin")