// Type FIFO (First In First Outr)

class Queue {
  constructor() {
    this.elements = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) { // insert on the queue
    this.elements[this.tail++] = element;
  }

  dequeue() {   // remove element 
    const removedElement = this.elements[this.head++];
    delete this.elements[this.head - 1];
    return removedElement;
  }

  peek() { // return first element (head)
    return this.elements[this.head];
  }

  isEmpty() { // return element is empty 
    return this.tail - this.head === 0;
  }

  size() { // return size of queue
    return this.tail - this.head;
  }
}


const f = new Queue;
f.enqueue(10);
f.enqueue(20);
f.enqueue(30);

console.log("Size: " +f.size());
console.log("Primo elemento: " + f.peek());
f.dequeue();
console.log("Size :" + f.size());
console.log("Primo elemento: " + f.peek());
