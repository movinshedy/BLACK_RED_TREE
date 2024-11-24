## A Red-Black <BR>
Tree is a type of self-balancing binary search tree (BST). It ensures that the height of the tree is 
𝑂(log𝑛)O(logn), making operations like search, insertion, and deletion efficient.<BR>

## Properties of a Red-Black Tree
Node Colors:<BR>

Each node is either red or black.
Root is Black:

The root of the tree is always black.
Red Nodes Rule:

Red nodes cannot have red children (no two consecutive red nodes).
Black-Height Rule:

Every path from a node to its descendant leaves must have the same number of black nodes.
Leaves are Black:

All leaves (NIL or null nodes) are considered black.
These properties ensure that the tree remains approximately balanced.

Basic Operations
Search:

Same as a regular binary search tree: traverse left or right based on the key.
Time Complexity: 
𝑂(log𝑛)O(logn)
Insertion:

Insert the node like in a BST.
Color the new node red.
Fix violations of red-black properties using rotations and recoloring.
Deletion:

Remove the node like in a BST.
Fix violations of red-black properties using rotations and recoloring.
Rotations:

Used to restore balance.
Left Rotation: Moves the node's right child up and the node down to the left.
Right Rotation: Moves the node's left child up and the node down to the right.
Example of Insertion Fixup
When a red node is inserted:

If the parent is black, no violation occurs.
If the parent is red:
Check the uncle's color:
If red, recolor the parent, uncle, and grandparent.
If black, perform a rotation (left or right) to fix the red-red violation.
### Example <br>
class Node {
  constructor(data) {
    this.data = data; 
    this.color = "red"; // New nodes are red
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class RedBlackTree {
  constructor() {
    this.TNULL = new Node(null); // Sentinel node (NIL)
    this.TNULL.color = "black";
    this.root = this.TNULL;
  }

  // Insert a new key into the tree
  insert(key) {
    const newNode = new Node(key);
    newNode.left = this.TNULL;
    newNode.right = this.TNULL;

    let parent = null;
    let current = this.root;

    // Find the correct parent for the new node
    while (current !== this.TNULL) {
      parent = current;
      if (key < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    newNode.parent = parent;

    // Assign newNode as the child of the parent
    if (parent === null) {
      this.root = newNode; // Tree was empty
    } else if (key < parent.data) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }

    // Fix the red-black tree violations
    this.fixInsert(newNode);
  }

  fixInsert(k) {
    while (k.parent && k.parent.color === "red") {
      if (k.parent === k.parent.parent.right) {
        const uncle = k.parent.parent.left;

        if (uncle && uncle.color === "red") {
          // Case 1: Uncle is red
          uncle.color = "black";
          k.parent.color = "black";
          k.parent.parent.color = "red";
          k = k.parent.parent;
        } else {
          if (k === k.parent.left) {
            // Case 2: k is a left child
            k = k.parent;
            this.rightRotate(k);
          }
          // Case 3: k is a right child
          k.parent.color = "black";
          k.parent.parent.color = "red";
          this.leftRotate(k.parent.parent);
        }
      } else {
        const uncle = k.parent.parent.right;

        if (uncle && uncle.color === "red") {
          // Case 1: Uncle is red
          uncle.color = "black";
          k.parent.color = "black";
          k.parent.parent.color = "red";
          k = k.parent.parent;
        } else {
          if (k === k.parent.right) {
            // Case 2: k is a right child
            k = k.parent;
            this.leftRotate(k);
          }
          // Case 3: k is a left child
          k.parent.color = "black";
          k.parent.parent.color = "red";
          this.rightRotate(k.parent.parent);
        }
      }

      if (k === this.root) break;
    }

    this.root.color = "black";
  }

  leftRotate(x) {
    const y = x.right;
    x.right = y.left;

    if (y.left !== this.TNULL) {
      y.left.parent = x;
    }

    y.parent = x.parent;

    if (x.parent === null) {
      this.root = y;
    } else if (x === x.parent.left) {
      x.parent.left = y;
    } else {
      x.parent.right = y;
    }

    y.left = x;
    x.parent = y;
  }

  rightRotate(x) {
    const y = x.left;
    x.left = y.right;

    if (y.right !== this.TNULL) {
      y.right.parent = x;
    }

    y.parent = x.parent;

    if (x.parent === null) {
      this.root = y;
    } else if (x === x.parent.right) {
      x.parent.right = y;
    } else {
      x.parent.left = y;
    }

    y.right = x;
    x.parent = y;
  }

  // Utility: Perform an in-order traversal
  inOrder(node = this.root) {
    if (node !== this.TNULL) {
      this.inOrder(node.left);
      console.log(`Node: ${node.data}, Color: ${node.color}`);
      this.inOrder(node.right);
    }
  }
}

// Example usage
const tree = new RedBlackTree();
tree.insert(10);
tree.insert(20);
tree.insert(15);
tree.insert(30);

console.log("In-order traversal:");
tree.inOrder();
