'use strict';

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(item) {
        this.head=new _Node(item, this.head);
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
        tempNode.next = new _Node(item, null);
    }
    insertBefore(item, before) {
        //Special Case if inserting before the head
        if(before === this.head.value) {
            const beforeNode = new _Node(item, this.head);
            this.head = beforeNode;
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
                const beforeNode = new _Node(item, currNode.next);
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
        const afterNode = new _Node(item, currNode.next);
        currNode.next = afterNode;
        return;

    }
    insertAt(item, index, counter = 0, currNode = this.head) {
        // if at head
        if(index === 0) {
            const newNode = new _Node(item, this.head);
            this.head = newNode;
            return;
        }
        if(counter === index - 1) {
            currNode.next = new _Node(item, currNode.next);
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
      let tempNode=this.head
      while (tempNode !== null) {
        console.log(tempNode.value);
        tempNode=tempNode.next
      }
    }
}

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next= next;
    }
}


function main() {
    let SLL = new LinkedList();
    let emptyList = new LinkedList();

    SLL.insertLast('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');

    SLL.insertLast('Tauhida');

    SLL.remove('squirrel');

    SLL.insertBefore('Athena', 'Boomer');
    SLL.insertAfter('Hotdog', 'Helo');
    SLL.insertAt('Kat', 3)
    SLL.remove('Tauhida')

    // console.log(SLL);
    // SLL.log();
    // display(SLL);
    // console.log(size(emptyList));
    // console.log(isEmpty(emptyList));
    console.log(findPrevious(emptyList, 'Boomer'))
    // console.log(findLast(emptyList))
}

const display = (list) => {
  let tempNode=list.head
      while (tempNode !== null) {
        console.log(tempNode.value);
        tempNode=tempNode.next
      }
}

const size = (list) => {
  let counter = 0;
  let tempNode=list.head;
  while (tempNode !== null) {
    counter++;
    tempNode=tempNode.next
  }
  return counter
}

const isEmpty = (list) => {
  return !list.head;
}

const findPrevious = (list, item) => {
  if (!list.head) {
    return null
  }
  if (list.head.value === item) {
    return null
  }
  let tempNode=list.head
  while(tempNode.next !== null) {
    if (tempNode.next.value === item) {
      return tempNode
    }
    tempNode = tempNode.next;
  }
  return null;
}

const findLast = (list) => {
  if (!list.head) {
    return null
  }
  let tempNode=list.head
  while (tempNode.next !==null) {
    tempNode = tempNode.next;
  }
  return tempNode;
}

//4. Mystery Program
//The program looks for duplicates in a linked list and removes
//redundant entries.
//The time complexity is quadratic, n^2

const reverseList = (list) => {
  let tempNode = list.head;
  while (tempNode !== null) {
    const nextNode = tempNode.next
    const nextNextNode = tempNode.next.next
    tempNode.next.next = tempNode
    tempNode.next = nextNextNode
  }
}

main();