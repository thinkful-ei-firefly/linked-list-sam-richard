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
        let tempNode=this.head;
        while (tempNode !== null) {
            console.log(tempNode.value);
            tempNode=tempNode.next;
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
    SLL.insertAt('Kat', 3);
    SLL.remove('Tauhida');

    // console.log(SLL);
    // SLL.log();
    // display(SLL);
    // console.log(size(emptyList));
    // console.log(isEmpty(emptyList));
    // console.log(findPrevious(emptyList, 'Boomer'));
    // console.log(findLast(emptyList))
    // display(iReverseList(SLL));
    // console.log(thirdFromLast(SLL));
    // console.log(getMiddle(emptyList)); //null
    // display(SLL);
    // console.log(getMiddle(SLL)); //kat
    // SLL.remove('Boomer');
    // display(SLL);
    // console.log(getMiddle(SLL)); //helo

}

const getMiddle = (list) => {
    //size/2 round up
    //8 -> 4
    //4 (1, 2, 3, 4) -> size = 4/2 -> 2
    //3 (2, 3, 4) -> 3
    //do we have list.head -> null
    if(!list.head) {
        return null;
    }
    //is list.head.next = null -> head
    if(list.head.next === null) {
        return list.head;
    }
    let s= size(list);
    let center;
    if(s % 2 === 0) {
        center = s/2 -1; 
    } else {
        center = Math.floor(s/2);
    }
    let counter = 0;
    let tempNode = list.head;
    while(tempNode !== null) {
        if(counter === center) {
            return tempNode;
        }
        counter ++;
        tempNode = tempNode.next;
    }
} 


const thirdFromLast = (list) => {
    if (!list.head) {
        return null;
    }
    let tempNode=list.head;
    while (tempNode.next.next.next !==null) {
        tempNode = tempNode.next;
    }
    return tempNode;
};

const display = (list) => {
    let tempNode=list.head;
    while (tempNode !== null) {
        console.log(tempNode.value);
        tempNode=tempNode.next;
    }
};

const size = (list) => {
    let counter = 0;
    let tempNode=list.head;
    while (tempNode !== null) {
        counter++;
        tempNode=tempNode.next;
    }
    return counter;
};

const isEmpty = (list) => {
    return !list.head;
};

const findPrevious = (list, item) => {
    if (!list.head) {
        return null;
    }
    if (list.head.value === item) {
        return null;
    }
    let tempNode=list.head;
    while(tempNode.next !== null) {
        if (tempNode.next.value === item) {
            return tempNode;
        }
        tempNode = tempNode.next;
    }
    return null;
};

const findLast = (list) => {
    if (!list.head) {
        return null;
    }
    let tempNode=list.head;
    while (tempNode.next !==null) {
        tempNode = tempNode.next;
    }
    return tempNode;
};

//4. Mystery Program
//The program looks for duplicates in a linked list and removes
//redundant entries.
//The time complexity is quadratic, n^2

const iReverseList = (list) => {
    let tempNode = list.head; // 1
    // 1, 2, 3, 4, 5,
    // 1, 2 push 2 to front -> 2, 1, 3, 4, 5
    while (tempNode.next !== null) {
        //adds next value to begining/head
        list.insertFirst(tempNode.next.value); 
        //remove next
        tempNode.next = tempNode.next.next;
    }
    return list;
};

//rReverseList() {}

main();