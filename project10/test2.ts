class DataStructure {
    public next?: DataStructure;
    public value: number;
    constructor(val: number) {
        this.value = val;
    }
}

class LinkList {
    root?: DataStructure;

    add(val: number) {
        const newNode = new DataStructure(val);
        if (!this.root) {
            this.root = newNode;
        } else {
            let curr = this.root;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
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

const tree = new LinkList();
tree.add(1);
tree.add(5);
tree.add(-21);
tree.add(55);
tree.print();
