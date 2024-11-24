
    export class RBTNode {
        static BLACK = 'black';
        static RED = 'red';
        static sentinel = Object.freeze({ color: RBTNode.BLACK });
      
        constructor({
          key, value,
          color = RBTNode.RED,
          parent = RBTNode.sentinel,
          left = RBTNode.sentinel,
          right = RBTNode.sentinel,
        }) {
          this.key = key;
          this.value = value;
          this.color = color;
          this.parent = parent;
          this.left = left;
          this.right = right;
        }
      }
      
      class RedBlackTree {
        constructor(Node = RBTNode) {
          this.Node = Node;
        }
      
        lookup(key) {
      
        }
      
       
        _rotateLeft(node) {
          const child = node.right;
      
          if (node === RBTNode.sentinel) {
            throw new Error('Cannot rotate a sentinel node');
          } else if (child === RBTNode.sentinel) {
            throw new Error('Cannot rotate away from a sentinal node');
          }
      
          // turn child's left subtree into node's right subtree
          node.right = child.left;
          if (child.left !== RBTNode.sentinel) {
            child.left.parent = node;
          }
      
          // link node's parent to child
          child.parent = node.parent;
          if (node === this._root) {
            this._root = child;
          } else if (node === node.parent.left) {
            node.parent.left = child;
          } else {
            node.parent.right = child;
          }
      
          // put node on child's left
          child.left = node;
          node.parent = child;
      
          // LOOK AT ME
          // I'M THE PARENT NOW
        }
      
        _rotateRight(node) {
          const child = node.left;
      
          if (node === RBTNode.sentinel) {
            throw new Error('Cannot rotate a sentinel node');
          } else if (child === RBTNode.sentinel) {
            throw new Error('Cannot rotate away from a sentinal node');
          }
      
          // turn child's right subtree into node's left subtree
          node.left = child.right;
          if (child.right !== RBTNode.sentinel) {
            child.right.parent = node;
          }
      
          // link node's parent to child
          child.parent = node.parent;
          if (node === this._root) {
            this._root = child;
          } else if (node === node.parent.right) {
            node.parent.right = child;
          } else {
            node.parent.left = child;
          }
      
          // put node on child's right
          child.right = node;
          node.parent = child;
        }
      
        _insertInternal(key, value) {
        }
      
        _insertRebalance(node) {
        }
      
        insert(key, value) {
          const node = this._insertInternal(key, value);
          this._insertRebalance(node);
        }
      
        delete(key) {
      
        }
      
        count() {
      
        }
      
        forEach(callback) {
          
        }
      }
      
      
      export default RedBlackTree;