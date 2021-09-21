class TreeNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

function insertNode(node, newNode) {
  if (newNode.key < node.key) {
    if (node.left === null) {
      node.left = newNode;
    } else {
      insertNode(node.left, newNode);
    }
  } else {
    if (node.right === null) {
      node.right = newNode;
    } else {
      insertNode(node.right, newNode);
    }
  }
}

function tranverseTree(root) {
  if (root === null) {
    return;
  } else {
    if (root.left !== null) {
      tranverseTree(root.left);
    }
    console.log(root.key);
    if (root.right !== null) {
      tranverseTree(root.right);
    }
  }
}

function bfs(root) {
  queue = [];
  if (root !== null) {
    queue.push(root);
  }

  result = [];
  while (queue.length > 0) {
    let node = queue.pop();
    result.push(node.key);

    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
  console.log(result);
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    let newNode = new TreeNode(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      insertNode(this.root, newNode);
    }
  }

  walk() {
    tranverseTree(this.root);
  }

  walk2() {
    bfs(this.root);
  }
}

let bt1 = new BinarySearchTree();
bt1.insert(11);
bt1.insert(3);
bt1.insert(2);
bt1.insert(1);
bt1.walk();
bt1.walk2();
