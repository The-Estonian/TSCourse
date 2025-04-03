const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: string): void => {
  console.log(message);
};

const logAndThrow = (errorMessage: string): never => {
  console.log(errorMessage);
  throw new Error(errorMessage);
};

const performJob = (cb: (msg: string) => void) => {
  cb('Job done!');
};

performJob(logMsg);

type User = {
  name: string;
  age: number;
  greet: () => string;
};

let user: User = {
  name: 'Max',
  age: 39,
  greet() {
    return this.name;
  },
};
