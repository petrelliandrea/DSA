class Queue {
  constructor() {
    this.elements = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.elements[this.tail++] = element;
  }

  dequeue() {
    const removedElement = this.elements[this.head++];
    delete this.elements[this.head - 1];
    return removedElement;
  }

  peek() {
    return this.elements[this.head];
  }

  isEmpty() {
    return this.tail - this.head === 0;
  }

  size() {
    return this.tail - this.head;
  }
}


const f = new Queue;
f.enqueue(10);


console.log(f.size())
