const { batchNorm2d, batchNorm3d } = require("@tensorflow/tfjs-core");

class TreeNode {
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

function insertNode(node, newNode){
    if(newNode.key < node.key){
        if(node.left === null){
            node.left = newNode;
        }else{
            insertNode(node.left, newNode);
        }
    }else{
        if(node.right === null){
            node.right = newNode;
        }else{
            insertNode(node.right, newNode);
        }
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(key){
        let newNode = new TreeNode(key);
        if(this.root === null){
            this.root = newNode;
        }else{
            insertNode(this.root, newNode);
        }
    }
}

let bt1 = new BinarySearchTree();
bt1.insert(1);
bt1.insert(2);
bt1.insert(3);
