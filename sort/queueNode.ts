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
	
	qeque(): T | undefined {
		if (!this.head){
			return undefined;
		}
		this.length--;
		const head = this.head;
		this.head = this.head.next;
		head.next = undefined;
		return head.value;
	}

	peek(): T | undefined {
		return this.head.value;
	}
}


const qu = new queueNode();

qu.enqueue(10)
qu.enqueue(20)
qu.enqueue(30)
qu.enqueue(50)
qu.enqueue(60)
qu.enqueue(20)


console.log(qu.peek())
qu.qeque();
console.log(qu.peek())
