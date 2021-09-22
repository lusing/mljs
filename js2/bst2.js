class TreeNode {
  constructor(key) {
    this.key = key;
    this.leftChild = null;
    this.rightChild = null;
  }
}

function insertNode(node, key) {
  if (key < node.key) {
    if (node.leftChild === null) {
      node.leftChild = new TreeNode(key);
    } else {
      insertNode(node.leftChild, key);
    }
  } else {
    if (node.rightChild === null) {
      node.rightChild = new TreeNode(key);
    } else {
      insertNode(node.rightChild, key);
    }
  }
}

function walkTree(node, func) {
  if (node === null) {
    return;
  }
  if (node.leftChild !== null) {
    walkTree(node.leftChild, func);
  }
  if (node.key !== null) {
    func(node.key);
  }
  if (node.rightChild !== null) {
    walkTree(node.rightChild, func);
  }
}

function searchNode(node, key) {
  if (node === null || node.key === null) {
    return null;
  }
  if (node.key === key) {
    return key;
  }
  if (key < node.key) {
    return searchNode(node.leftChild, key);
  } else {
    return searchNode(node.rightChild, key);
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    if (this.root === null) {
      this.root = new TreeNode(key);
    } else {
      insertNode(this.root, key);
    }
  }

  walk(func) {
    walkTree(this.root, func);
  }

  search(key) {
    return searchNode(this.root, key);
  }
}

let bst1 = new BinarySearchTree();

bst1.insert(1);
bst1.insert(2);
bst1.insert(4);

bst1.walk(console.log);

console.log(bst1.search(2));
console.log(bst1.search(3));
