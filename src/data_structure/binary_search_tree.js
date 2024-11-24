class BSTNode {
    constructor({ key, value, parent, left, right }) {
      this.key = key;
      this.value = value;
      this.parent = parent;
      this.left = left;
      this.right = right;
    }
  }
  
  class BinarySearchTree {
    constructor(Node = BSTNode) {
      this.Node = Node;
      this._count = 0;
      this._root = undefined;
    }
  
    insert(key, value = true) {
      // TODO
    }
  
    lookup(key) {
      let node = this._root;
  
      while (node) {
        if (key < node.key) {
          node = node.left;
        } else if (key > node.key) {
          node = node.right;
        } else { // equal
          return node.value;
        }
      }
    }
  
    delete(key) {
      // TODO (tests first!)
    }
  
    count() {
      return this._count;
    }
  
    forEach(callback) {
      
      const visitSubtree = (node, callback, i = 0) => {
        if (node) {
          i = visitSubtree(node.left, callback, i);
          callback({ key: node.key, value: node.value }, i, this);
          i = visitSubtree(node.right, callback, i + 1);
        }
        return i;
      }
      visitSubtree(this._root, callback)
    }
  }
  
  export default BinarySearchTree;