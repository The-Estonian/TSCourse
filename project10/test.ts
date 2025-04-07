class List {
    public next?: List;
    public value: string;
    constructor(value: string) {
        this.value = value;
    }
}

class RootList {
    public root?: List;
    add(val: string) {
        const node: List = new List(val);
        if (!this.root) {
            this.root = node;
        } else {
            let current = this.root;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
    print() {
        let placeholder = this.root;
        while (placeholder) {
            console.log(placeholder.value);
            placeholder = placeholder.next;
        }
    }
}

const testlist = new RootList();
testlist.add('a');
testlist.add('b');
testlist.add('c');
testlist.print();
