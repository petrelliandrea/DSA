class RingBuffer<T> {
    private buffer: Array<T>;
    private capacity: number;
    private head: number;
    private tail: number;
    private size: number;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.buffer = new Array<T>(capacity);
        this.head = 0;
        this.tail = 0;
        this.size = 0;
    }

    public push(item: T): void {
        if (this.size === this.capacity) {
            this.tail = (this.tail + 1) % this.capacity;
        } else {
            this.size++;
        }
        this.buffer[this.head] = item;
        this.head = (this.head + 1) % this.capacity;
    }

    public pop(): T | undefined {
        if (this.size === 0) {
            return undefined; // Buffer is empty
        }
        const item = this.buffer[this.tail];
        this.tail = (this.tail + 1) % this.capacity;
        this.size--;
        return item;
    }

    public peek(): T | undefined {
        if (this.size === 0) {
            return undefined; // Buffer is empty
        }
        return this.buffer[this.tail];
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

    public isFull(): boolean {
        return this.size === this.capacity;
    }

    public getSize(): number {
        return this.size;
    }

    public getCapacity(): number {
        return this.capacity;
    }
}

const ringBuffer = new RingBuffer<number>(5);

ringBuffer.push(1);
ringBuffer.push(2);
ringBuffer.push(3);
ringBuffer.push(4);
ringBuffer.push(5);
console.log("Size " + ringBuffer.getSize());
console.log("Peek (tail element) " + ringBuffer.peek()) // Take tail element
ringBuffer.push(6); // Slide 
console.log("Remove tail element 1 and insert 6")
console.log("Push 6 on the ringbuffer");
console.log("Size " + ringBuffer.getSize());  // Same size
console.log("Peek (tail element) " + ringBuffer.peek());  // Take tail element
ringBuffer.pop(); // Slide 
console.log("Peek (tail element) " + ringBuffer.peek());  // Take tail element
console.log("Size " + ringBuffer.getSize());
