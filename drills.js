class LinkedList {
  constructor() {
    this.head = null
  }
  insertFirst(item) {
    this.head=new _Node(item, this.head)
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
      return;
    }
    let tempNode = this.head
    while (tempNode.next !== null) {
      tempNode = tempNode.next;
    }
    tempNode.next = new _Node(item, null);
  }
  remove(item) {
    if (!this.head) {
      return null
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let tempNode = this.head
    while ((tempNode.next !== null) && (tempNode.next.value !== item)) {
      if (tempNode.next === null) {
        console.log('item not found')
        return;
      }
      tempNode = tempNode.next;
    }
      
    tempNode.next = tempNode.next.next
    return;
  }
  find() {

  }
}

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next= next;
  }
}

const list = new LinkedList()

list.insertFirst('a')
list.insertLast('b')
list.insertLast('c')
list.insertLast('d')
list.remove('a')


console.log(list)