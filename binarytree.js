// TODO
// 左子节点的值 < 父节点的值 <= 右节点的值
// 插入生成

// 遍历结果

// Node 单个叶子结点 object
function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

// BST 二叉树
function BST() {
  this.root = null;
  this.insert = insert;
}

// 插入节点函数
function insert(data) {
  let newNote = new Node(data, null, null);
  if (this.root === null) {
    this.root = newNote;
  } else {
    let current = this.root;
    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNote;
          break;
        } else {
          current = current.left;
        }
      } else {
        if (current.right === null) {
          current.right = newNote;
          break;
        } else {
          current = current.right;
        }
      }
    }
  }
}

// traverse binary tree
function traverse(current) {
  if (current.left !== null) {
    traverse(current.left);
  }
  console.log('node is', current.data);
  if (current.right !== null) {
    traverse(current.right);
  }
}

const newTree = new BST();
newTree.insert(3);
newTree.insert(2);
newTree.insert(4);
newTree.insert(5);
traverse(newTree.root);
