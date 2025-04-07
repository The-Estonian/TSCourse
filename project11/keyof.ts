type User = {
    name: string;
    age: number;
};
// type UserKeys = keyof User;

// let validKey: UserKeys;

// validKey = 'age';
// validKey = 'name';

// console.log(validKey);

function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
    const val = obj[key];
    if (val === undefined || val === null) {
        throw new Error('Does not exist');
    }
    return val;
}

const anObject: User = {
    name: 'bob',
    age: 55,
};

console.log(getProp(anObject, 'name'));

class ANode<T> {
    next?: ANode<T>;
    value: T;
    constructor(val: T) {
        this.value = val;
    }
}

class NodeTree<T> {
    root?: ANode<T>;
    tail?: ANode<T>;

    add(val: T) {
        const newNode = new ANode(val);
        if (!this.root) {
            this.root = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            this.tail = newNode;
            // let curr = this.root;
            // while (curr.next) {
            //     curr = curr.next;
            // }
            // curr.next = newNode;
        }
    }

    print() {
        let curr = this.root;
        while (curr) {
            console.log(curr.value);
            curr = curr.next;
        }
    }
}

const startNode = new NodeTree<string>();
startNode.add('Hello');
startNode.add('Bye');
startNode.add('Test');
startNode.add('OneMore');

startNode.print();
