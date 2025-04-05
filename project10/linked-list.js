"use strict";
class ListNode {
    value;
    next;
    constructor(value) {
        this.value = value;
    }
}
class LinkedList {
    root;
    tail;
    length = 0;
    add(value) {
        const node = new ListNode(value);
        if (this.root === undefined) {
            this.root = node;
        }
        else {
            let current = this.root;
            while (current.next != undefined) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }
    getNumberOfElements() {
        return this.length;
    }
    print() {
        let current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}
const list = new LinkedList();
list.add(5);
list.add(3);
list.add(10);
list.add(-5);
console.log(list.getNumberOfElements);
list.print();
const nameList = new LinkedList();
