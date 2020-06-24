const head = Symbol('head');

class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this[head] = null;
  }

  add(data) {
    const newNode = new LinkedListNode(data);

    if (this[head] === null) {
      this[head] = newNode;
    } else {
      let current = this[head];

      while (current.next !== null) {
        current = current.next;
      }

      current.next = newNode;
    }
  }

  insertBefore(data, index) {
    const newNode = new LinkedListNode(data);

    if (this[head] === null) {
      throw new RangeError(`Index ${index} does not exist in the list.`);
    }

    if (index === 0) {
      newNode.next = head;
      this[head] = newNode;
    } else {
      let current = this[head];
      previous = null;

      let i = 0;

      while (current.next !== null && i < index) {
        previous = current;
        current = current.next;
        i++;
      }

      previous.next = newNode;
      newNode.next = current;
    }
  }
}
