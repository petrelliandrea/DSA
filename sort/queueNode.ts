type Node<T> = {
	value: T,
	next?: Node<T>,
}


export default class queueNode<T> {



	public length: number;
	private head?: Node<T>;
	private tail?: Node<T>; 


	constructor(){
		this.head = this.tail = undefined;  
		// this.head first node on the list, this.tail point always on the last value in the list.
		// FIFO (First In Last Out    
		//  head -> 10 -> 20 -> 30 -> undefined
		//  tail -> 30 
		//  head -> 10 -> 20 -> undefined 
		//  tail -> 20 
		//  head -> 10 -> undefined
		//  tail -> 10 
		//  head -> undefined
		//  tail -> undefined
		this.length = 0;
	}

	enqueue(item: T):void{
		const Node = {value:item} as Node<T>;
		this.length++;
		if(!this.tail && !this.head){
			this.tail = this.head = Node;
			return;
		}

		this.tail.next = Node;
		this.tail = Node;
	}
	
	deque(): T | undefined {
		if (!this.head){
			return undefined;
		}
		this.length--;
		const head = this.head; // Save the current head 
		this.head = this.head.next; // Head became the next node
		head.next = undefined; // Remove the old node from the list
		return head.value; // Return the element removed
	}

	peek(): T | undefined {
		return this.head.value;
	}
}


const qu = new queueNode();

qu.enqueue(10)
qu.enqueue(20)
qu.enqueue(30)

console.log("Head Value: " + qu.peek());
console.log("Remove fist element (HEAD): " + qu.deque());
console.log("Head Value: " + qu.peek())

