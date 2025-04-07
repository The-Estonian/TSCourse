"use strict";
// type UserKeys = keyof User;
// let validKey: UserKeys;
// validKey = 'age';
// validKey = 'name';
// console.log(validKey);
function getProp(obj, key) {
    const val = obj[key];
    if (val === undefined || val === null) {
        throw new Error('Does not exist');
    }
    return val;
}
const anObject = {
    name: 'bob',
    age: 55,
};
console.log(getProp(anObject, 'name'));
class ANode {
    constructor(val) {
        this.value = val;
    }
}
class NodeTree {
    add(val) {
        const newNode = new ANode(val);
        if (!this.root) {
            this.root = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
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
const startNode = new NodeTree();
startNode.add('Hello');
startNode.add('Bye');
startNode.add('Test');
startNode.add('OneMore');
startNode.print();
