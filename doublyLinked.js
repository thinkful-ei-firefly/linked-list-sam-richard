class DoublyLinkedList {
  constructor() {
      this.head = null;
  }
  insertFirst(item) {
      const firstNode = new _Node(item, this.head, null);
      if (this.head) {
        this.head.prev = firstNode
      }
      this.head=firstNode
  }
  insertLast(item) {
      if (this.head === null) {
          this.insertFirst(item);
          return;
      }
      let tempNode = this.head;
      while (tempNode.next !== null) {
          tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null, tempNode);
  }
  insertBefore(item, before) {
      //Special Case if inserting before the head
      if(before === this.head.value) {
          const newNode = new _Node(item, this.head, null);
          this.head.prev = newNode
          this.head = newNode
          return;
      }
      //start at the head of LL
      let currNode = this.head;

      //If the LL is empty, return null
      if(!this.head) {
          return null;
      }

      //loop through nodes in LL
      while(currNode.value !== before) {
          //check if at the end of the list, if so return null
          if(currNode.next === null) {
              return null;
          }
          else if(currNode.next.value === before) {
              //insert new item
              const beforeNode = new _Node(item, currNode.next, currNode);
              currNode.next.prev = beforeNode;
              currNode.next = beforeNode;
              return;
          }
          else {
              //otherwise update to next node
              currNode = currNode.next;
          }
      }
      return null;
  }
  insertAfter(item, after) {
      const currNode = this.find(after);
      const afterNode = new _Node(item, currNode.next, currNode);
      currNode.next.prev = afterNode;
      currNode.next = afterNode;
      return;

  }
  insertAt(item, index, counter = 0, currNode = this.head) {
      // if at head
      if(index === 0) {
          const newNode = new _Node(item, this.head, null);
          this.head.prev = newNode;
          this.head = newNode;
          return;
      }
      if(counter === index - 1) {
          const newNode = new _Node(item, currNode.next, currNode);
          currNode.next.prev = newNode
          currNode.next = newNode
          return;
      }
      else {
          this.insertAt(item, index, counter + 1, currNode.next);
      }
  }
  remove(item) {
      if (!this.head) {
          return null;
      }
      if (this.head.value === item) {
          this.head = this.head.next;
          return;
      }
      let tempNode = this.head;
      while ((tempNode.next !== null) && (tempNode.next.value !== item)) {
          tempNode = tempNode.next;
      }
      if (tempNode.next === null) {
          console.log(`${item} not found`);
          return;
      }
      
      tempNode.next.next.prev = tempNode
      tempNode.next = tempNode.next.next;
      return;
  }
  find(item) {
      //start at the head of LL
      let currNode = this.head;

      //If the LL is empty, return null
      if(!this.head) {
          return null;
      }

      //loop through nodes in LL
      while(currNode.value !== item) {
          //check if at the end of the list, if so return null
          if(currNode.next === null) {
              return null;
          }
          else {
              //otherwise update to next node
              currNode = currNode.next;
          }
      }

      return currNode;
  }
  log() {
      let tempNode=this.head;
      while (tempNode !== null) {
          console.log(tempNode.value);
          tempNode=tempNode.next;
      }
  }
}

class _Node {
  constructor(value, next, prev) {
      this.value = value;
      this.next= next;
      this.prev = prev;
  }
}

reverseDLL = (list) => {
  let tempNode = list.head
  while (tempNode !== null) {
    const next = tempNode.next;
    tempNode.next = tempNode.prev;
    tempNode.prev = next;
    if (tempNode.prev === null) {
      list.head=tempNode
    }
    tempNode = next;
  }
  return list
}

mainDLL = () => {
  let DLL = new DoublyLinkedList();

  DLL.insertFirst('Aquaria');
  DLL.insertLast('Caprica');
  DLL.insertLast('Gemenon');
  DLL.insertLast('Picon');
  DLL.insertLast('Sagittaron');

  DLL.insertLast('Tauron')
  DLL.remove('Picon')

  // console.log(DLL);
  // console.log(DLL.find('Gemenon'))
  console.log(reverseDLL(DLL))
}

mainDLL()