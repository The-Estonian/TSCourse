"use strict";
class DataStruct {
    left;
    right;
    val;
    constructor(val) {
        this.val = val;
    }
}
class BinaryTree {
    root;
    add(val) {
        const curr = new DataStruct(val);
        if (!this.root) {
            this.root = curr;
        }
        else {
            this.insert(this.root, curr);
        }
    }
    insert(root, curr) {
        if (curr.val < root.val) {
            if (!root.left) {
                root.left = curr;
            }
            else {
                this.insert(root.left, curr);
            }
        }
        else {
            if (!root.right) {
                root.right = curr;
            }
            else {
                this.insert(root.right, curr);
            }
        }
    }
}
const newTree = new BinaryTree();
newTree.add(5);
newTree.add(6);
newTree.add(7);
console.log(newTree);
