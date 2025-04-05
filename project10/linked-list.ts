class ListNode<T> {
    next?: ListNode<T>;
    constructor(public value: T) {}
}

class LinkedList<T> {
    private root?: ListNode<T>;
    private tail?: ListNode<T>;
    private length = 0;

    add(value: T) {
        const node = new ListNode(value);
        if (this.root === undefined) {
            this.root = node;
        } else {
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

const list = new LinkedList<number>();

list.add(5);
list.add(3);
list.add(10);
list.add(-5);

console.log(list.getNumberOfElements());
list.print();

