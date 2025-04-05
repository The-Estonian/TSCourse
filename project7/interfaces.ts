/* eslint-disable prefer-const */
interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

interface AuthenticatableAdmin extends Authenticatable {
  role: 'admin' | 'superadmin';
}

let user: Authenticatable;

user = {
  email: 'test@example.com',
  password: 'abc',
  login() {
    // login to backend
  },
  logout() {
    // clear login
  },
};

console.log(user);

class AuthenticatableUser implements Authenticatable {
  constructor(public email: string, public password: string) {}
  login() {}
  logout() {}
}

const test = new AuthenticatableUser('SomeEmail', 'SomePassword');

console.log(test);

const authenticate = (user: Authenticatable) => {
  user.login();
};
