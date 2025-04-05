type DataStore = {
    [prop: string]: boolean | number;
};

let store: DataStore = {};

store.id = 5;
store.isOpen = false;
// store.name = 'Max'; // value should be a bool or string

let roles = ['admin', 'guest', 'editor'] as const;

// roles.push("new name") // read only

const firstRole = roles[0];

let someObj: Record<string, number | boolean>;

let dataEntries = {
    entry1: 0.51,
    entry2: -1.23,
} satisfies Record<string, number>;

dataEntries.entry3;
