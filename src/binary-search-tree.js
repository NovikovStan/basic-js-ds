const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
    // remove line with error and write your code here
  }

  add(data) {
    let node = new Node(data);
    if (this.treeRoot === null) {
      this.treeRoot = node;
    } else {
      this.addNode(this.treeRoot, node);
    }
    // remove line with error and write your code here
  }

  has(data) {
    return !this.findNode(this.treeRoot, data) ? false : true;
    // remove line with error and write your code here
  }

  find(data) {
    return this.findNode(this.treeRoot, data);
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    if (!this.treeRoot) return;
    let node = this.treeRoot;
    while (node.left) {
      node = node.left;
    }
    return node.data;
    // remove line with error and write your code here
  }

  max() {
    if (!this.treeRoot) return;
    let node = this.treeRoot;
    while (node.right) {
      node = node.right;
    }
    return node.data;
    // remove line with error and write your code here
  }

  addNode(node, leaf) {
    if (leaf.data < node.data) {
      if (node.left === null) {
        node.left = leaf;
      } else {
        this.addNode(node.left, leaf);
      }
    } else {
      if (node.right === null) {
        node.right = leaf;
      } else {
        this.addNode(node.right, leaf);
      }
    }
  }

  findNode(node, data) {
    if (!node) return null;
    if (data < node.data) return this.findNode(node.left, data);
    if (data > node.data) return this.findNode(node.right, data);
    return node;
  }
}

module.exports = {
  BinarySearchTree,
};
